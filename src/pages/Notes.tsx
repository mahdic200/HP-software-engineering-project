import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setDocTitle } from "@/utils/Helpers";
import { Children, useState } from "react";
import { getLocalItem, setLocalItem } from "@/utils/LocalStorage";
import { isEmpty } from "@/utils/Empty";
import NoteInterface from "@/interfaces/NoteInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Notes() {

    const [notes, setNotes] = useState<NoteInterface[] | null>(isEmpty(getLocalItem("notes", true)) ? [] : getLocalItem("notes", true));

    setDocTitle("دفترچه یادداشت");

    const schema = z.object({
        body: z.string().min(3),
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const handleSave = (formValues: any) => {
        let notes_object: NoteInterface[] = JSON.parse(localStorage.getItem("notes")!);
        notes_object = isEmpty(notes_object) ? [] : notes_object;
        let id = getRandomInt(1000, 100000);
        notes_object.push({
            id: id + "",
            body: formValues.body
        });
        localStorage.setItem("notes", JSON.stringify(notes_object))
        setNotes(notes_object);
    }

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    const delete_note = (number: string) => {
        let notes_object = notes?.filter((note) => {
            return note.id !== number;
        });
        setLocalItem("notes", notes_object, true)
        if (isEmpty(notes_object)) {
            localStorage.removeItem('notes');
        }
        notes_object = notes_object == undefined ? [] : notes_object;
        setNotes(notes_object);
    }

    return (
        <>
            <section className="flex justify-center items-center">
                <form onSubmit={handleSubmit(handleSave)} className="w-[50%] flex flex-col justify-evenly items-center rounded-lg bg-[var(--third)]">
                    <section className="w-[100%] p-5 flex flex-col gap-y-5 items-center">
                        <label htmlFor="body">متن خود را وارد کنید</label>
                        <textarea id="body" {...register("body")} className="w-[100%] rounded-md focus:outline-none px-3 py-1"></textarea>
                    </section>
                    <section className="w-100 text-red-500">{(errors.body as any)?.message}</section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        <button type="submit" className="rounded-md px-3 py-2 bg-[var(--prim)]">ثبت</button>
                    </section>
                </form>
            </section>
            <section className="flex flex-col items-center gap-y-2 mt-5">
                {notes !== null && notes.length !== 0 && Children.toArray(Object.values(notes).map((note) => {
                    return (
                        <>
                        <section className="w-[50%] flex flex-col p-2 rounded-lg bg-[var(--third)]">
                            <section className="flex flex-row-reverse justify-between items-center mb-3">
                                <FontAwesomeIcon icon={faTrash} className="text-[1.5rem] text-red-500 cursor-pointer transition-all hover:text-red-600"
                                onClick={() => {delete_note(note.id)}}
                                />
                                <section className="text-[var(--prim)]">
                                    نوشته شماره {note.id}
                                </section>
                            </section>
                            <section>{note.body}</section>
                        </section>
                        </>
                    );
                }))}
            </section>
        </>
    );
}

export default Notes;
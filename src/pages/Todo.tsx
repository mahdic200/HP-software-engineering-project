import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setDocTitle } from "@/utils/Helpers";
import { Children, MouseEvent, useState } from "react";
import { getLocalItem, removeLocalItem, setLocalItem } from "@/utils/LocalStorage";
import { isEmpty } from "@/utils/Empty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoInterface from "@/interfaces/TodoInterface";


function Todo() {

    const [todos, setTodos] = useState<TodoInterface[] | null>(isEmpty(getLocalItem("todos", true)) ? [] : getLocalItem("todos", true));
    const [changed, setChanged] = useState<boolean>(true);

    setDocTitle("رویداد نگار");

    const schema = z.object({
        title: z.string().min(3),
        body: z.string().min(3),
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const handleSave = (formValues: any) => {
        let todos_object: TodoInterface[] = getLocalItem("todos", true);
        todos_object = isEmpty(todos_object) ? [] : todos_object;
        formValues.id = getRandomInt(1000, 100000);
        todos_object.push({
            id: formValues.id,
            title: formValues.title,
            state: "2",
            ...formValues
        });
        setLocalItem("todos", todos_object, true);
        setTodos(todos_object);
    }

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    const delete_todo = (number: string) => {
        let todos_object = todos?.filter((note) => {
            if (note.id === number) {
                return false;
            } else {
                return true;
            }
        });
        setLocalItem("todos", todos_object, true)
        if (isEmpty(todos_object)) {
            removeLocalItem("todos");
        }
        todos_object = todos_object == undefined ? [] : todos_object;
        setTodos(todos_object);
    }

    const check_todo = (e: MouseEvent, id: string) => {
        const input_value = (e.currentTarget as HTMLInputElement).checked;
        const new_state = input_value ? "1" : "2";
        let todos_object = todos;
        let i: null | number = null;
        let todo: TodoInterface | null = null;
        todos_object?.forEach((todo_, index) => {
            if (todo_.id === id) {
                console.log
                i = index;
                todo_.state = new_state;
                todo = todo_;
                return;
            }
        });
        if (i == null) return;
        todos_object![i!] = {
            ...todo! as TodoInterface,
        };
        setLocalItem("todos", todos_object, true);
        setTodos(todos_object);
        setChanged(!changed);
    };

    return (
        <>
            <section className="flex justify-center items-center">
                <form onSubmit={handleSubmit(handleSave)} className="w-[50%] flex flex-col justify-evenly items-center rounded-lg bg-[var(--third)]">
                    <section className="w-[100%] p-5 flex flex-col gap-y-5 items-center">
                        <label htmlFor="title">عنوان</label>
                        <input id="title" type="text" {...register("title")} className="w-[100%] rounded-md focus:outline-none px-3 py-1" />
                    </section>
                    <section className="w-100 text-red-500">{(errors.title as any)?.message}</section>
                    <section className="w-[100%] p-5 flex flex-col gap-y-5 items-center">
                        <label htmlFor="body">جزئیات کار جدید را بنویسید</label>
                        <textarea id="body" {...register("body")} className="w-[100%] rounded-md focus:outline-none px-3 py-1"></textarea>
                    </section>
                    <section className="w-100 text-red-500">{(errors.body as any)?.message}</section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        <button type="submit" className="rounded-md px-3 py-2 bg-[var(--prim)]">ثبت</button>
                    </section>
                </form>
            </section>
            <section className="flex flex-col items-center gap-y-2 mt-5">
                {todos !== null && todos.length !== 0 && Children.toArray(Object.values(todos).map((todo) => {
                    return (
                        <>
                        <section className={(todo.state == "1" ? "bg-gray-400" : "bg-[var(--third)]") + " w-[50%] flex flex-col p-2 rounded-lg"}>
                            <section className="flex flex-row-reverse justify-between items-center mb-3">
                                <FontAwesomeIcon icon={faTrash} className="text-[1.5rem] text-red-500 cursor-pointer transition-all hover:text-red-600"
                                onClick={() => {delete_todo(todo.id)}}
                                />
                                <section className="text-[var(--prim)]">
                                    <input type="checkbox" id={todo.id} className="mx-2" defaultChecked={todo.state == "1"} onClick={(e) => {check_todo(e, todo.id)}} />
                                    <label htmlFor={todo.id} className={todo.state == "1" ? "line-through" : ""}>{todo.title}</label>
                                </section>
                            </section>
                            <section>{todo.body}</section>
                        </section>
                        </>
                    );
                }))}
            </section>
        </>
    );
}

export default Todo;
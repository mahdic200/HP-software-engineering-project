import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setDocTitle } from "@/utils/Helpers";
import { useState } from "react";




function DateTransform() {

    const [date, setDate] = useState<any>(null);

    setDocTitle("تبدیل تاریخ");

    const schema = z.object({
        date: z.string(),
        type: z.any(),
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const handleSave = (formValues: any) => {
        let date = new Date(formValues.date);
        console.log(date)
        if (formValues.type == 'g_p') {
            setDate(date.toLocaleDateString('fa-IR'));
        }
        else if (formValues.type == 'p_g') {
            setDate(date.toLocaleDateString('en-US'));
        }
    }
    return (
        <>
        <section className="flex justify-center items-center">
            <form onSubmit={handleSubmit(handleSave)} className="w-[50%] flex flex-col justify-evenly items-center rounded-lg bg-[var(--third)]">
                <section className="p-5 flex flex-col gap-y-5">
                    <label htmlFor="type">نوع تبدیل را انتخاب کنید</label>
                    <select id="type" {...register("type")} className="rounded-md focus:outline-none px-3 py-1" defaultValue={"p_g"}>
                        <option value="p_g">شمسی به میلادی</option>
                        <option value="g_p">میلادی به شمسی</option>
                    </select>
                </section>
                <section className="p-5 flex flex-col gap-y-5 items-center">
                    <label htmlFor="date">تاریخ را وارد کنید</label>
                    <section>
                        <input id="date" type="date" min={"1300-01-01"} {...register("date")} className="rounded-md focus:outline-none px-3 py-1" />
                        <button type="submit" className="mx-2 rounded-md px-3 py-2 bg-[var(--prim)]">ثبت</button>
                    </section>
                </section>
                <section className="w-100 text-red-500">{(errors.date as any)?.message}</section>
                <section className="p-5 flex justify-start gap-x-5 items-center">
                    خروجی : {date}
                </section>
            </form>
        </section>
        </>
    );
}

export default DateTransform;
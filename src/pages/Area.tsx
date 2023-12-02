import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setDocTitle } from "@/utils/Helpers";
import { useState } from "react";




function Area() {

    const [result, setResult] = useState<any>(null);
    const [type, setType] = useState<"1" | "2">("1");

    setDocTitle("مساحت");

    const schema = z.object({
        type: z.any(),
        width: z.number().min(0),
        height: z.number().min(0).or(z.nan()),
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const handleSave = (formValues: any) => {
        if (formValues.type == '1') {
            setResult(formValues.width * formValues.height);
        }
        else if (formValues.type == '2') {
            setResult(Math.PI * (formValues.width ** 2))
        }
    }
    return (
        <>
        <section className="flex justify-center items-center">
            <form onSubmit={handleSubmit(handleSave)} className="w-[50%] flex flex-col justify-evenly items-center rounded-lg bg-[var(--third)]">
                <section className="p-5 flex gap-5">
                    <label htmlFor="type">نوع محاسبه</label>
                    <select id="type" {...register("type", { onChange: (e) => {
                        setType(e.currentTarget.value);
                    } })} className="rounded-md focus:outline-none px-3 py-1" defaultValue={"p_g"}>
                        <option value="1">مستطیل و مربع</option>
                        <option value="2">دایره</option>
                    </select>
                </section>
                <section className="p-5 flex gap-x-5 items-center">
                    <label htmlFor="width">{type == "1" ? "طول" : "شعاع"}</label>
                    <section>
                        <input id="width" type="number" min={0} {...register("width", { valueAsNumber: true })} className="rounded-md focus:outline-none px-3 py-1" />
                    </section>
                </section>
                <section className="w-100 text-red-500">{(errors.width as any)?.message}</section>
                {type == "1" && <section className="p-5 flex gap-x-5 items-center">
                    <label htmlFor="height">عرض</label>
                    <section>
                        <input id="height" type="number" min={0} {...register("height", { valueAsNumber: true })} className="rounded-md focus:outline-none px-3 py-1" />
                    </section>
                </section>}
                <section className="w-100 text-red-500">{(errors.height as any)?.message}</section>
                <button type="submit" className="mx-2 rounded-md px-3 py-2 bg-[var(--prim)]">ثبت</button>
                <section className="p-5 flex justify-start gap-x-5 items-center">
                    خروجی : {result}
                </section>
            </form>
        </section>
        </>
    );
}

export default Area;
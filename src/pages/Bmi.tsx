import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setDocTitle } from "@/utils/Helpers";
import { ReactNode, useState } from "react";


function Bmi() {

    const [bmi, setBmi] = useState<number>(0);
    const [measure, setMeasure] = useState<ReactNode>(<span>وارد نشده</span>);

    setDocTitle("شاخص BMI");

    const schema = z.object({
        height: z.number().min(140),
        weight: z.number().min(10),
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const handleSave = (formValues: any) => {
        const bmi = (formValues.weight) / ((formValues.height / 100) ** 2);
        setBmi(bmi);
        if (bmi <= 18) {
            setMeasure(<span style={ { color: "#FFE189", backgroundColor: "white", borderRadius: "15px", padding: "8px" } }>کم تر از وزن معمول</span>);
        }
        else if (18.5 <= bmi && bmi <= 24.9) {
            setMeasure(<span style={ { color: "green", backgroundColor: "white", borderRadius: "15px", padding: "8px" } }>وزن طبیعی</span>);
        }
        else if (25.0 <= bmi && bmi <= 39.9) {
            setMeasure(<span style={ { color: "#FFE189", backgroundColor: "white", borderRadius: "15px", padding: "8px" } }>اضافه وزن</span>);
        }
        else if (40 <= bmi) {
            setMeasure(<span style={ { color: "red", backgroundColor: "white", borderRadius: "15px", padding: "8px" } }>چاقی</span>);
        }
    }

    return (
        <>
            <section className="flex justify-center items-center">
                <form onSubmit={handleSubmit(handleSave)} className="w-[50%] flex flex-col justify-evenly items-center rounded-lg bg-[var(--third)]">
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        <label htmlFor="height">قد خود را وارد کنید (به سانتی متر)</label>
                        <input id="height" type="number" {...register("height", { valueAsNumber: true })} className="rounded-md focus:outline-none px-3 py-1" />
                    </section>
                    <section className="w-100 text-red-500">{(errors.height as any)?.message}</section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        <label htmlFor="weight">وزن خود را وارد کنید (به کیلوگرم)</label>
                        <input id="weight" type="number" {...register("weight", { valueAsNumber: true})} className="rounded-md focus:outline-none px-3 py-1" />
                    </section>
                    <section className="w-100 text-red-500">{(errors.weight as any)?.message}</section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        <button type="submit" className="rounded-md px-3 py-2 bg-[var(--prim)]">ثبت</button>
                    </section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        شاخص بی ام ای شما : {bmi}
                    </section>
                    <section className="p-5 flex justify-start gap-x-5 items-center">
                        شما در وضعیت {measure}قرار دارید .
                    </section>
                </form>
            </section>
        </>
    );
}

export default Bmi;
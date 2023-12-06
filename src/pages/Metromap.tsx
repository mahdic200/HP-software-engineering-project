import { setDocTitle } from "@/utils/Helpers";
import tehran from "@/assets/images/tehran.jpg";
import shiraz from "@/assets/images/shiraz.jpg";
import mashhad from "@/assets/images/mashhad.jpg";
import esfehan from "@/assets/images/esfehan.jpg";
import tabriz from "@/assets/images/tabriz.jpg";
import { ChangeEvent, useState } from "react";

function Metromap() {

    setDocTitle("نقشه مترو")

    const [src, setSrc] = useState<string>("");

    const handleChange = (e: ChangeEvent) => {
        let input = e.currentTarget as HTMLInputElement;
        setSrc(input.value);
    };
    
    return (
        <>
        <section className="flex justify-center items-center">
            <section className="p-5 flex flex-col gap-y-5">
                <label htmlFor="type">نوع تبدیل را انتخاب کنید</label>
                <select id="type" className="rounded-md focus:outline-none px-3 py-1" onChange={handleChange} defaultValue={""}>
                    <option value="">انتخاب کنید</option>
                    <option value={tehran}>تهران</option>
                    <option value={shiraz}>شیراز</option>
                    <option value={esfehan}>اصفهان</option>
                    <option value={mashhad}>مشهد</option>
                    <option value={tabriz}>تبریز</option>
                </select>
            </section>
        </section>
        <section className="flex justify-center items-center">
            <section className="rounded-lg bg-[var(--third)] p-5">
                {src !== "" && <img src={src} alt="نقشه مترو" />}
                {src === "" && <section>انتخاب نشده</section>}
            </section>
        </section>
        </>
    );
}

export default Metromap;
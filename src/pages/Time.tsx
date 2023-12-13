import { setDocTitle } from "@/utils/Helpers";
import { useEffect, useState } from "react";

function Time() {
    setDocTitle("ساعت جهانی")
    const [s, setS] = useState(false);

    var x: any;
    useEffect(() => {
        x = setInterval(() => setS(!s), 1000);
        return () => {
            clearInterval(x);
        }
    }, [s]);

    const date = new Date();
    return (
        <>
        <section className="flex justify-center items-center">
            <section className="text-[3rem] text-[var(--prim)] flex flex-col justify-center items-center p-5 rounded-lg bg-[var(--third)]">
                <p>{date.getUTCFullYear() + "-" + date.getUTCMonth() + "-" + date.getUTCDay()}</p>
                <p>{date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()}</p>
                <p>{date.toUTCString()}</p>
            </section>
        </section>
        </>
    );
}

export default Time;
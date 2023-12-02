import { setDocTitle } from "@/utils/Helpers";

function Time() {
    setDocTitle("ساعت جهانی")
    return (
        <>
        <section className="flex justify-center items-center">
            <section className="text-[3rem] text-[var(--prim)] flex flex-col justify-center items-center p-5 rounded-lg bg-[var(--third)]">
                <p>{(new Date(Date.UTC((new Date()).getFullYear()))).toDateString()}</p>
                <p>{(new Date(Date.UTC((new Date()).getFullYear()))).toLocaleTimeString()}</p>
            </section>
        </section>
        </>
    );
}

export default Time;
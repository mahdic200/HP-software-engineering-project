import { useEffect, useState } from "react";

function Stopwatch() {

    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    useEffect(() => {
        let interval: any = null;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };


    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <>
        <section className="text-center">
            <section className="text-[3rem]">
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                </span>
                :
                <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
                .
                <span>
                    {("0" + Math.floor((time / 10) % 100)).slice(-2)}
                </span>
            </section>
            <section className="w-full flex gap-x-2 justify-center">
                {!isActive && <button className="rounded-md bg-[var(--third)] text-[1.5rem] hover:shadow-md px-2" onClick={handleStart}>start</button>}
                {isActive && <button className="rounded-md bg-[var(--third)] text-[1.5rem] hover:shadow-md px-2" onClick={handlePauseResume}>{isPaused ? "resume" : "pause"}</button>}
                {isActive && <button className="rounded-md bg-[var(--third)] text-[1.5rem] hover:shadow-md px-2" onClick={handleReset}>reset</button>}

            </section>
        </section>
        </>
    );
}


export default Stopwatch;
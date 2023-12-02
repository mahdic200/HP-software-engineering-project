import { MouseEvent, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface Props {
    children: ReactNode;
    onClick: (arg: MouseEvent) => void;
}
function CBotton ({ children, onClick }: Props) {
    return (
        <>
        <section className="col-span-1 text-[2rem] py-1 bg-teal-300 flex justify-center items-center rounded-md hover:bg-teal-200 cursor-pointer select-none"
        onClick={(e) => {onClick(e)}}
        >
            {children}
        </section>
        </>
    );
}



function Calculator() {
    const [phrase, setPhrase] = useState<string>("");

    const add = (e: MouseEvent) => {
        if (phrase.length == 18) return;
        setPhrase(phrase + e.currentTarget.innerHTML)
    }

    return (
        <>
        <section className="flex justify-center items-center">
            <section className="w-[30%] flex flex-col rounded-lg bg-[var(--third)] gap-y-5 p-6">
                <input type="text" className="w-full select-none text-[2rem] rounded-md focus:outline-none px-3 py-1" dir="ltr" value={phrase} onChange={() => {}} />
                <section className="w-full grid grid-cols-4 gap-5">
                    <CBotton onClick={add}>+</CBotton>
                    <CBotton onClick={add}>3</CBotton>
                    <CBotton onClick={add}>2</CBotton>
                    <CBotton onClick={add}>1</CBotton>
                    <CBotton onClick={add}>-</CBotton>
                    <CBotton onClick={add}>6</CBotton>
                    <CBotton onClick={add}>5</CBotton>
                    <CBotton onClick={add}>4</CBotton>
                    <CBotton onClick={add}>*</CBotton>
                    <CBotton onClick={add}>9</CBotton>
                    <CBotton onClick={add}>8</CBotton>
                    <CBotton onClick={add}>7</CBotton>
                    <CBotton onClick={add}>/</CBotton>
                    <CBotton onClick={() => {
                        if (phrase != "") {
                            setPhrase(phrase.slice(0, -1));
                        }
                    }}>C</CBotton>
                    <CBotton onClick={add}>0</CBotton>
                    <CBotton onClick={() => {
                        setPhrase("")
                    }}>Ac</CBotton>
                    <CBotton onClick={() => {
                        try {
                            toast.success(eval(phrase), { theme: "colored" });
                            setPhrase(eval(phrase));
                        } catch (e) {
                            toast.error("عبارت درست وارد کنید", { theme: "colored" });
                        }
                    }}>=</CBotton>
                </section>
            </section>
        </section>
        </>
    );
}

export default Calculator;
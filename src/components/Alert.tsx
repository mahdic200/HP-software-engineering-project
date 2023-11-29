import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: "info" | "success" | "warning" | "danger";
    onClose?: (...arg: any) => any;
}
function Alert({ children, color = 'success', onClose = () => {} }: Props) {
    return (
        <>
            <div className={`${color} flex flex-row items-start p-2 my-2 rounded-md`}>
                <div className="block text-right cursor-pointer"><span onClick={(e) => {
                    const current = e.currentTarget;
                    const parent = current.parentNode?.parentNode as HTMLElement;
                    parent.style.display = 'none'
                    onClose();
                }} className="p-[0_4px] bg-gray-800 text-white hover:bg-white hover:text-black rounded-md"><FontAwesomeIcon icon={faClose} /></span></div>
                <div className="pt-1 px-2 text-justify">{children}</div>
            </div>
        </>
    );
}
export default Alert;
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: ReactNode,
    link: string,
    icon: IconProp,
}

function Card({ title, icon, link }: Props) {
    return (
        <>
            <Link to={link} className="col-span-2 group h-[8rem] flex flex-col justify-center items-center text-[var(--prim)] rounded-md bg-[var(--third)]">
                <h2 className="text-[1.3rem]">{title}</h2>
                <section className="text-[3rem]">
                    <FontAwesomeIcon icon={icon} />
                </section>
            </Link>
        </>
    );
}

export default Card;
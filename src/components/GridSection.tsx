import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    className?: string,
}

function GridSection({ children, className = '' }: Props) {
    return (
        <>
            <section className={className + " rtl grid grid-cols-12 gap-3 p-4"}>
                {children}
            </section>
        </>
    );
}

export default GridSection;
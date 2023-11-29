import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

function Master() {
    return (
        <>
            <header className="h-[4rem] text-[var(--second)] bg-[var(--third)] px-2 bg-prim flex justify-between items-center">
                <section></section>
                <section>
                    جعبه ابزار
                    <FontAwesomeIcon className="ml-1" icon={faBox} />
                </section>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Master;
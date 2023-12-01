import Routes from "@/routes/Routes";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

function Master() {
    return (
        <>
            <header className="h-[4rem] text-[var(--second)] bg-[var(--forth)] px-2 bg-prim flex justify-between items-center">
                <section>
                    <FontAwesomeIcon className="ml-1" icon={faBox} />
                    جعبه ابزار
                </section>
                <section></section>
            </header>
            <main className="p-5">
                
            <Link to={Routes.home} className="rounded-md  text-[var(--prim)] px-3 py-1 bg-[var(--forth)]">بازگشت به خانه</Link>

                <Outlet />
            </main>
        </>
    );
}

export default Master;
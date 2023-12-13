import { setDocTitle } from "@/utils/Helpers";
import { Link } from "react-router-dom";
import Routes from "@/routes/Routes";

function Help() {

    setDocTitle("راهنما")
    
    return (
        <>
        <section className="m-5 rounded-md p-4 bg-[var(--third)]">
            این برنامه شامل 10 ماژول کاربردی است که میتوانید از
            آنها استفاده کنید .
            هر ماژول کاری ساده را انجام میدهد .

            <ul className="list-disc pr-5 mt-5 leading-10">
                <li>
                    توی ماژول
                    <Link to={Routes.area} className="text-blue-500"> مساحت </Link>
                    ما یک کار ساده انجام دادیم و مساحت رو حساب کردیم
                </li>
                <li>
                    توی ماژول
                    <Link to={Routes.area} className="text-blue-500"> کرنو متر </Link>
                    ما یک کرنومتر ساختیم که زمان رو اندازه بگیریم
                </li>
            </ul>
        </section>
        </>
    );
}

export default Help;
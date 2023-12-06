import { setDocTitle } from "@/utils/Helpers";

function Help() {

    setDocTitle("راهنما")
    
    return (
        <>
        <section className="m-5 rounded-md p-4 bg-[var(--third)]">
            این برنامه شامل 10 ماژول کاربردی است که میتوانید از
            آنها استفاده کنید . ظ
            هر ماژول کاری ساده را انجام میدهد .
        </section>
        </>
    );
}

export default Help;
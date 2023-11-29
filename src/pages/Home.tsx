import { setDocTitle } from "@/utils/Helpers";

function Home() {
    
    setDocTitle("خانه")

    return (
        <>
            <section className="text-center">
                <h1 className="text-[1.5rem] text-cyan-500">
                    Home page
                </h1>
            </section>
        </>
    );
}

export default Home;
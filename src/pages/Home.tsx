import { setDocTitle } from "@/utils/Helpers";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";
import Routes from "@/routes/Routes";
import { faCalculator, faInfoCircle, faRuler } from "@fortawesome/free-solid-svg-icons";

function Home() {
    setDocTitle("خانه")

    return (
        <>
            <section className="text-center">
                <GridSection>
                    <Card link={Routes.bmi} title="شاخص BMI" icon={faRuler} />
                    <Card link={Routes.calc} title="ماشین حساب" icon={faCalculator} />
                    <Card link={Routes.calc} title="سایت خبری" icon={faCalculator} />
                    <Card link={Routes.calc} title="یادداشت" icon={faCalculator} />
                    <Card link={Routes.calc} title="کرنومتر" icon={faCalculator} />
                    <Card link={Routes.calc} title="مساحت و حجم" icon={faCalculator} />
                    <Card link={Routes.calc} title="نقشه مترو" icon={faCalculator} />
                    <Card link={Routes.about} title="درباره ما" icon={faCalculator} />
                    <Card link={Routes.help} title="راهنما" icon={faInfoCircle} />
                </GridSection>
            </section>
        </>
    );
}

export default Home;
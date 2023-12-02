import { setDocTitle } from "@/utils/Helpers";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";
import Routes from "@/routes/Routes";
import { faCalculator, faCalendar, faCheckSquare, faClock, faInfoCircle, faNoteSticky, faRuler, faStopwatch } from "@fortawesome/free-solid-svg-icons";

function Home() {
    setDocTitle("خانه")

    return (
        <>
            <section className="text-center">
                <GridSection>
                    <Card link={Routes.bmi} title="شاخص BMI" icon={faRuler} />
                    <Card link={Routes.date} title="تبدیل تاریخ" icon={faCalendar} />
                    <Card link={Routes.notes} title="یادداشت" icon={faNoteSticky} />
                    <Card link={Routes.calc} title="ماشین حساب" icon={faCalculator} />
                    <Card link={Routes.time} title="ساعت جهانی" icon={faClock} />
                    <Card link={Routes.todo} title="رویداد نگار" icon={faCheckSquare} />
                    <Card link={Routes.stopwatch} title="کرنومتر" icon={faStopwatch} />
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
import { setDocTitle } from "@/utils/Helpers";
import GridSection from "@/components/GridSection";
import Card from "@/components/Card";
import Routes from "@/routes/Routes";
import { faAreaChart, faBook, faCalculator, faCalendar, faCheckSquare, faClock, faInfoCircle, faMap, faNoteSticky, faRuler, faStopwatch } from "@fortawesome/free-solid-svg-icons";

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
                    <Card link={Routes.area} title="مساحت و حجم" icon={faAreaChart} />
                    <Card link={Routes.metromap} title="نقشه مترو" icon={faMap} />
                    <Card link={Routes.about} title="درباره ما" icon={faBook} />
                    <Card link={Routes.help} title="راهنما" icon={faInfoCircle} />
                </GridSection>
            </section>
        </>
    );
}

export default Home;
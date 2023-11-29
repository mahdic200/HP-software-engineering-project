import AtomicSpinner from "atomic-spinner";

interface Props {
    className?: string;
}

function AtomicLoading({ className }: Props) {
    return (
        <section className={(className ?? '') + " w-full h-[50vh] md:h-[100vh] flex justify-center items-center"}>
            <AtomicSpinner />
        </section>
    );
}

export default AtomicLoading;

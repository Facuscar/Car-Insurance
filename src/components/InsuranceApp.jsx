import Form from "./Form";
import Result from "./Result";

const InsuranceApp = () => {

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Car insurance quoter</h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
                <Result />
            </main>
        </>
    );
}

export default InsuranceApp;
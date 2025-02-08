import Dashboard from "@/assets/dashboard.svg";
import Industrial from "@/assets/industrial.svg";

export default function Information() {
    return (
        <div className="text-center p-8">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Empowering Industrial IoT with Data Intelligence
            </h2>

            <div className="flex flex-wrap items-center mt-20 text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src={Dashboard}
                        alt="dashboard"
                        className="inline-block rounded "
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Industrial IoT Made Intelligent
                    </h3>
                    <p className="sm:text-lg mt-6">
                        Our platform streamlines IoT data collection and
                        analysis for industrial applications. Connect any sensor
                        via industry-standard protocols, then leverage our
                        unique dataset marketplace to enhance your ML models
                        with industry-validated data.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img
                        src={Industrial}
                        alt="project members"
                        className="inline-block rounded"
                    />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Predict, Monitor, Act
                    </h3>
                    <p className="sm:text-lg mt-6">
                        Monitor critical infrastructure in real-time, predict
                        potential failures, and get instant alerts - whether
                        it's pipe systems, medical equipment, or industrial
                        machinery. Train better models faster by combining your
                        sensor data with curated datasets from your industry.
                    </p>
                </div>
            </div>
        </div>
    );
}

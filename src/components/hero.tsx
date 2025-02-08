import { Button } from "./ui/button";
import HeroIllustration from "@/assets/hero.svg";
// import { Separator } from "./ui/separator";

export default function Hero() {
    return (
        <section className="pt-12 pb-12 sm:pb-24 lg:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <div className="text-center lg:text-left space-y-4">
                            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-4xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
                                <span className="text-emerald-500 dark:text-emerald-400">
                                    IoT Intelligence
                                </span>{" "}
                                Platform with Industry Dataset Marketplace
                            </h1>
                            <p className="mt-2 text-lg text-muted-foreground sm:mt-8 font-inter">
                                Transform sensor data into predictive insights -
                                access industry-specific datasets to supercharge
                                your ML models
                            </p>

                            <form
                                action="#"
                                method="POST"
                                className="mt-8 sm:mt-10"
                            >
                                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email address"
                                        className="block w-full px-3 py-2 text-foreground placeholder-foreground bg-transparent border border-accent-foreground outline-none focus:border-background focus:ring-1 focus:ring-background rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                    />
                                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                        <Button
                                            type="submit"
                                            className="py-4 text-lg"
                                        >
                                            Subscribe
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <img
                            className="w-full"
                            src={HeroIllustration}
                            alt="hero illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

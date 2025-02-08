import { Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <section className="py-10 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex gap-4 items-center justify-between flex-col sm:flex-row">
                    <div className="flex items-center gap-6">
                        <div>
                            <h1 className="font-extrabold text-3xl select-none">
                                Sensor
                                <span className="text-emerald-600 dark:text-emerald-400">
                                    Stack
                                </span>
                            </h1>
                        </div>

                        <div>
                            <ul className="flex items-center space-x-3">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/bthomas123/"
                                        title="LinkedIn"
                                        target="_blank"
                                        className="flex items-center justify-center transition-all duration-200 rounded-full w-8 h-8 hover:bg-blue-400 dark:hover:bg-blue-600  focus:bg-accent"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-center text-muted-foreground">
                            © Copyright 2025, All Rights Reserved by SensorStack
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

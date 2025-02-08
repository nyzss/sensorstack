import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import ThemeSelect from "./change-theme";
import { buttonVariants } from "./ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import Footer from "./footer";

export default function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col items-center">
                <div className="container lg:max-w-[60rem]">
                    <nav className="hidden justify-between p-5 w-full sm:flex">
                        <div>
                            <h1 className="font-extrabold text-xl py-1 select-none">
                                Sensor
                                <span className="text-emerald-600 dark:text-emerald-400">
                                    Stack
                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                to={"/"}
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "xl",
                                    className: "text-[17px]",
                                })}
                            >
                                Home
                            </Link>
                            {/* <Link
                                to={"/about"}
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "xl",
                                    className: "text-[17px]",
                                })}
                            >
                                About
                            </Link> */}

                            <ThemeSelect />
                        </div>
                    </nav>
                    <nav className="sm:hidden flex justify-between w-full p-4">
                        <Collapsible open={open} onOpenChange={setOpen}>
                            <CollapsibleTrigger
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "icon-lg",
                                })}
                            >
                                {open ? <X /> : <Menu />}
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="flex flex-col gap-4">
                                    <Link
                                        to={"/"}
                                        className={buttonVariants({
                                            variant: "link",
                                        })}
                                    >
                                        Home
                                    </Link>
                                    {/* <Link
                                        to={"/about"}
                                        className={buttonVariants({
                                            variant: "link",
                                        })}
                                    >
                                        About
                                    </Link> */}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <ThemeSelect />
                    </nav>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

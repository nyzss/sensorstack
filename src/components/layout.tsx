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

export default function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-screen h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 flex flex-col items-center">
            <div className="container">
                <nav className="hidden justify-between p-4 w-full sm:flex">
                    <div>
                        <h1>SensorStack</h1>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            to={"/"}
                            className={buttonVariants({ variant: "ghost" })}
                        >
                            Home
                        </Link>
                        <Link
                            to={"/"}
                            className={buttonVariants({ variant: "ghost" })}
                        >
                            About
                        </Link>

                        <ThemeSelect />
                    </div>
                </nav>
                <nav className="sm:hidden flex justify-between w-full p-4">
                    <Collapsible open={open} onOpenChange={setOpen}>
                        <CollapsibleTrigger
                            className={buttonVariants({ variant: "ghost" })}
                        >
                            {open ? <X size={32} /> : <Menu size={32} />}
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
                                <Link
                                    to={"/"}
                                    className={buttonVariants({
                                        variant: "link",
                                    })}
                                >
                                    About
                                </Link>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <ThemeSelect />
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, Outlet } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

export default function Layout() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="w-screen h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50">
            <nav className="flex justify-between p-4 w-full ">
                <div>
                    <h1>SensorStack</h1>
                </div>
                <div className="flex gap-4">
                    <Link
                        to={"/"}
                        className="transition-colors px-4 py-2 font-semibold rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/"}
                        className="transition-colors px-4 py-2 font-semibold rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    >
                        About
                    </Link>

                    <Select onValueChange={(value) => setTheme(value)}>
                        <SelectTrigger className="border-0">
                            {/* <SelectValue placeholder={theme} /> */}
                            {(theme === "system" && <Monitor size={18} />) ||
                                (theme === "light" && <Sun size={18} />) ||
                                (theme === "dark" && <Moon size={18} />)}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                <div className="flex flex-row items-center gap-2">
                                    <Sun size={15} />
                                    <h1>Light</h1>
                                </div>
                            </SelectItem>
                            <SelectItem value="dark">
                                <div className="flex flex-row items-center gap-2">
                                    <Moon size={15} />
                                    <h1>Dark</h1>
                                </div>
                            </SelectItem>
                            <SelectItem value="system">
                                <div className="flex flex-row items-center gap-2">
                                    <Monitor size={15} />
                                    <h1>System</h1>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

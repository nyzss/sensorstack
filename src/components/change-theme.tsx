import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { buttonVariants } from "./ui/button";

export default function ThemeSelect() {
    const { theme, setTheme } = useTheme();
    return (
        <Select onValueChange={(value) => setTheme(value)}>
            <SelectTrigger
                className={buttonVariants({
                    variant: "ghost",
                    className: "max-w-12",
                })}
            >
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
    );
}

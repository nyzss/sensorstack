import { useTheme } from "next-themes";
import { Outlet } from "react-router";

export default function Layout() {
    const { theme, setTheme } = useTheme();
    return (
        <main>
            <div className="w-screen h-screen bg-slate-100 dark:bg-zinc-900 text-zinc-950 dark:text-slate-100">
                <h1>this is the layout</h1>
                <h1>theme {theme}</h1>
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    change theme
                </button>
                <Outlet />
            </div>
        </main>
    );
}

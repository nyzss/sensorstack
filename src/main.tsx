import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home.tsx";
import Layout from "./components/layout.tsx";
import { ThemeProvider } from "next-themes";
import About from "./pages/about.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider attribute={"class"}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);

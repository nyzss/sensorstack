import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="text-6xl font-bold">{count}</h1>
            <button
                onClick={() => setCount((prev) => prev + 1)}
                className="rounded-md px-4 py-1.5 bg-amber-500  active:bg-amber-400 transition-colors border-2 border-zinc-400 shadow-sm shadow-black font-medium hover:bg-amber-300"
            >
                increment
            </button>
        </div>
    );
}

export default App;

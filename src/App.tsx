import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev++)}>inc</button>
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer currentCount={currentCount} />
      </section>
      <section>
        <Controller setCurrentCount={setCurrentCount} />
      </section>
    </div>
  );
}

export default App;

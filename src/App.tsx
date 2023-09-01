import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [peoples, setPeoples] = useState<
    { fullName: string; age: number; img: string; bio?: string }[]
  >([{ fullName: "sepideh", age: 27, img: "test", bio: "test" }]);
  return (
    <div className="App">
      {peoples.map((p) => (
        <>{p.fullName}</>
      ))}
    </div>
  );
}

export default App;

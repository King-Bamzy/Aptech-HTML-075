import React from "react";
import Welcom from "./Welcom";

function App() {
    const names = ["Cuban","Spencer","Robert","Einstein"];
    return (
        <div className="App">
            {names.map((nm) => (
                <Welcom name={nm}/>
           ) )}
        </div>
    );
}
export default App;
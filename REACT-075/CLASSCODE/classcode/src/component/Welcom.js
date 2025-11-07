import React from "react";

function Welcom(){
    const name = ["Cuban","Spencer","Robert","Einstein"];
    return(
        <section>
            <h2 className="user-name">
                Hello <span className="user-first-name">{name}</span>🍾🎊🎊🔥🎆🎇🐦‍🔥
            </h2>
        </section>
    );
}
export default Welcom;
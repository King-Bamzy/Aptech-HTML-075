import React from "react";

function User() {
    const name = [];
    const pic = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    return (
        <section>
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>🍾🎊🎊🔥🎆🎇🐦‍🔥
            </h2>
        </section>
    );
}
export default User;
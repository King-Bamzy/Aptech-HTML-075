function ClickMe () {
  return <button onClick={ ()  => console.log("Clicked👆")}>Click me</button>;
};
export default ClickMe;
----------------------
function ClickMe() {
  const onUserClick = () => console.log("Clicked👆");

  return <button onClick={onUserClick}>Click me</button>
}
export default ClickMe
--------------------
function Counter() {
  let like = 10;
  return (
    <div>
      {/*camelcase */}
      <button
      onClick={() => {
        like++;
        console.log(like);
      }}
      >Like</button>
      <h1>{like}</h1>
      <h1>{like}</h1>
      <h1>{like}</h1>
    </div>
  );
}
--------------------
function Counter() {
  let [like, setLike] = useState(0);

  return (
    <div>
      {/*camelcase */}
      <button onClick={ () => setLike(like + 1)}>👍{like}</button>
      <h1>{like}</h1>
    </div>
  );
}
-------------------------

const USER_LIST = [
  {
        name: "Cuban",
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib-rb-4.0.3sixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffe enthusiast.",
  },
  {
     name: "Spencer",
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib-rb-4.0.3sixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Award-winning web lover. Thinker. Social media advocate. Creator. Bacon scholar. Zombie geek",
  },
  {
     name: "Robert",
    pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Professional communicator. Travel scholar. Friendly music junkie. Hardcore zombie aficionado",
  },
  {
     name: "Einstein",
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib-rb-4.0.3sixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker. Pop culture evangelist",
  },
];

function App(){
  const users = USER_LIST;
  return(
    <div className="App">
      <UserList users={users} />
    </div>
  );
}
function UserList ({ users }) {
  return (
    <div className="user-list-container">
      {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
function User ({ name, pic })  {
  return (
    <section className='user-container'>
      <img className='user-profile-pic' src={pic} alt={name} />
      <h2 className="user-name">
        Hello, <span className="user-first-name">{name}</span>🐦‍🔥🍾
      </h2>
    </section>
  );
}
export default App;
export default Counter;
---------------------
function ColorBox() {
  const [color, setColor] = useState("");
  const styles = {
    background: color,
  };

  return (
    <div>
      <h1>Color Box</h1>
      <input type="text" style={styles} placeholder="Type a color" onChange={(event) => setColor(event.target.value)}/>
    </div>
  );
}

export default ColorBox
----------------------
 <form className="login-form">
      <h1>Login Form</h1>
      <input name="email" type="email" placeholder="username" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
--------------------------------
      <form className="login-form">
    <h1>Login Form</h1>
    <input
    value={email}
    onChange={(event) => setEmail(event.currentTarget.value)}
    name="email"
    type='email'
    placeholder="usename"
    />
    <input
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    name="password"
    type="password"
    placeholder="password"
    />
    <button type="submit">Submit</button>
   </form>
   -------------------------------
   function LoginForm() {
  const [email, setEmail] = useState("mark@gmail.com");
  const [password, setPassword] = useState("secret123");
  return (
 <form
 className="login-form"
 onSubmit={(event) => {
  event.preventDefault();
  console.log(email, password)
 }}
 >
  <h1>Login Form</h1>
  <input
  name="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  type="email"
  placeholder='username'
  />

  <input
  name="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  type="password"
  placeholder='password'
  />
  <button type="submit">Submit</button>

 </form>
  );
}
export default LoginForm
------------------
 const styles = {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100px",
    aspectRation: "1/1",
    borderRadius: "50%",
    background: "brown",
    transform: "translateX(-50%) translateY(-50%)",
  };
  return(
    <div className="dot-container">
      
      <div style={styles}></div>
    </div>
  );
----------------------------------------
function PaintDot() {
 const [pos, setPos] = useState({});
 const styles = {
  position: "absolute",
    top: `${pos.pageY}px`,
    left: `${pos.pageX}px`,
    height: "100px",
    aspectRation: "1/1",
    borderRadius: "50%",
    background: "brown",
    transform: "translateX(-50%) translateY(-50%)",
  };
 return (
  <div
  onTouchStart={(event) => setPos(event.changedTouches[0])}
  className="dot-container"
  >
    <h1>X: {pos.pageX}</h1>
    <h1>Y: {pos.pageY}</h1>
    <div style={styles}></div>
  </div>
 );

}
export default PaintDot
----------------------------------
function Game() {
  let [count, setCount] = useState(0);
  const startGame = () => {
    console.log("Game is started");
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Game started {count} time</h1>
      <StartGame onPlayerClick={startGame}/>
    </div>
  );
}
function StartGame({ onPlayerClick }) {
  return (
    <div>
      <button onClick={ () => onPlayerClick()}>Start</button>
    </div>
  );
}
export default Game;
-----------------------------
function App () {
const users = USER_LIST = [
 {
  name: "Cuban",
pic: "https://images.unsplash.com/photo-1618641986557-lecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",

bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffee enthusiast.",
 },
 {
name: "Spencer",

pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",

bio: "Award-winning web lover. Thinker. Social media advocate. Creator.Bacon scholar. Zombie geek",
 },
 {
name: "Robert",

pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",

bio: "Professional communicator. Travel scholar. Friendly music junkie.Hardcore zombie aficionado",
 },
 {
name: "Einstein",

pic: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city. jpg?s=612x612&w=0&k=20&c=81-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=",

bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker.Pop culture evangelist",
 },
]
return (
<div className="App">
<nav className="nav-list">
<Link to="/">Home</Link>
<Link to="/users">Users</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/users" element={<UserList users={users} />} />
<Route path="/users/:id" element={<UserDetail users={users} />} />
</Routes>
</div>
);
------------------------------------
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// UserDetail Component
function UserDetail({ users }) {
  const { id } = useParams();
  console.log(id);
  
  // Check if user exists
  if (!users[id]) {
    return <div>User not found</div>;
  }
  
  const user = users[id];
  return (
    <section className="user-detail-container">
      <img className="user-profile-pic" src={user.pic} alt={user.name} />
      <div>
        <h2 className="user-name">{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </section>
  );
}

// UserList Component
function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index} className="user-item">
          <Link to={`/users/${index}`}>
            <img src={user.pic} alt={user.name} className="user-thumbnail" />
            <span>{user.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

// Home Component
function Home() {
  return (
    <div>
      <h1>Welcome to User Directory</h1>
      <p>Select a user to view their profile</p>
    </div>
  );
}

// Main App Component
function App() {
  const users = [
    {
      name: "Cuban",
      pic: "https://images.unsplash.com/photo-1618641986557-lecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffee enthusiast.",
    },
    {
      name: "Spencer",
      pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      bio: "Award-winning web lover. Thinker. Social media advocate. Creator.Bacon scholar. Zombie geek",
    },
    {
      name: "Robert",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
      bio: "Professional communicator. Travel scholar. Friendly music junkie.Hardcore zombie aficionado",
    },
    {
      name: "Einstein",
      pic: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=81-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=",
      bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker.Pop culture evangelist",
    },
  ];

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/users">Users</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList users={users} />} />
          <Route path="/users/:id" element={<UserDetail users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}
--------------------------------
function UserList ({ users }) {

return (
<div className="user-list-container">
{users.map ( (usr, index) => (
<User name={usr.name} pic={usr.pic} id={index} />
))}
</div>
);
}
export default UserList;
------------------------
import {
Routes,
Route,
Link,
useNavigate,
useParams,
} from "react-router-dom";
function User ({ name, pic, id }) {
const navigate = useNavigate () ;
return (
<section
onClick={ () => navigate ('/users/${id} ')}
className="user-container"
>
<img className="user-profile-pic" src={pic} alt={name} />
<h2 className="user-name">
Hello, <span className="user-first-name">{name}</span>
</h2>
</section>
);
}
export default User;
------------------------
function NotFound () {

return (

<div>

<h1>404 Not found</h1>

</div>
-------------------------

import {
Routes,
Route,
Link,
useNavigate,
useParams,
} from "react-router-dom";
<Route path="/people" element={<Navigate replace to="/users" />} />
--------------------------
import "./App.css";
function UserPic() {
(
<div>
<img
className="profile-pic"
src="https://images.pexels.com/photos/1704488/pexels-photo-
1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
alt="Mark"
/>
</div>
);
}
return
---------------------
.profile-pic {
height: 200px;
aspect-ratio: 1/1;
border-radius: 50%;
object-fit: cover;
}
------------------------
.profile-pic {
height: 200px;
aspect-ratio: 1/1;
border-radius: 50%;
object-fit: cover;
}
--------------------
function UserPic() {
const styles = {
height: "200px",
aspectRatio: "1/1",
borderRadius: "50%",
objectFit: "cover",
};
return (
 <div>
<img
style={styles}
src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
alt="Mark" />
</div>
);
}
function App () {
return (
<div className="App">
<UserPic />
</div>
); 
}  
---------------------

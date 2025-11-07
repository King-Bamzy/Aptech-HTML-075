import React from 'react';
import './header.css';

function Header(){
    return(
        <div className='top'>
            <p>Enoch</p>
            <nav>
                <a href="">Home</a>
                <a  href="">about</a>
                <a  href="">skills</a>
                <a  href="">work</a>
                <a  href="">contact</a>
            </nav>

      
        <div className='btn'>
            <button>SignIn</button>
            <button>Logout</button>
        </div>
      
        </div>
    );
}
export default Header;
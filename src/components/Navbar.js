import {Link, Outlet} from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {

    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
        console.log(color);
      }, []);
    
      function setColor (newColor){
        document.documentElement.style.setProperty('--background-color', newColor);
    }

    return (
    <>
    <nav className="nav">
        {/* <a href="/" className="site-title">Site Name</a>   */}
        <ul>
            <Link onClick={() => setColor('#77B1FF')} to="/">Home</Link>
            <Link onClick={() => setColor('red')} to="/red">Red</Link >
            <Link onClick={() => setColor('green')} to="/green">Green</Link >
            <Link onClick={() => setColor('blue')} to="/blue">Blue</Link >
        </ul>
        </nav>
        <Outlet />
    </>
    )
}

// function CustomLink({ href, children, ...props }) {
//     const path = window.location.pathname

//     return (
//         <li className={path === href ? "active" : ""}>
//             <a href={href} {...props}>
//                 {children}
//             </a>
//         </li>
//     )
// }


// import React,{Component} from 'react';

// export class Navbar extends Component {

//     render(){
//         return(
//             <div>
//                 <h1>This Will Be My Navbar.</h1>
//             </div>
//         )
//     }
// }
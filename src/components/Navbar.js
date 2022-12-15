
export default function Navbar() {

    return (
    <nav className="nav">
        <a href="/" className="site-title">Site Name</a>  
        <ul>
            <CustomLink href="/red">Red</CustomLink>
            <CustomLink href="/green">Green</CustomLink>
            <CustomLink href="/blue">Blue</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}


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
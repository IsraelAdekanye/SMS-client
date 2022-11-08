import { Link } from "react-router-dom";

const Navbartwo = () => {
    return ( 
        <div>
           <nav className="navbar">
                <p>SMS</p>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li className="nav-btn">
                        <Link to="/signIn"> <button>Sign-In</button> </Link>
                    </li>
                </ul>
           </nav>
        </div>
     );
}
 
export default Navbartwo;
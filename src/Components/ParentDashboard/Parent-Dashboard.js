import {Link} from  "react-router-dom"

import { FiUser, FiLogOut } from "react-icons/fi";
import {Sidebar} from "./Sidebar"
import  "./Parent-Dashboard.css"

import { useState } from "react";

const ParentDashboard = (props) => {
    const [logoutPop, setLogoutPop] = useState(false);

    const togglepopUp = () => {
        setLogoutPop(!logoutPop)
    }

    return (
        <div className="parent-dashboard">  
                <div className="side-bar">
                    <div className="parent-profile">
                        <div className="small-profile">
                            <FiUser></FiUser>
                        </div>
                        <div className="parent-name">
                            <span className="names" > Lawal Adunola </span>
                            <span> Parent/Guardian  </span>
                        </div>
                    </div>
                   <div className="iconWords">
                        <ul className="side-ul">
                            { Sidebar.map((i, key) => {
                            return( <div  key={key} > 
                                <Link to={i.path} >
                                <li> {i.icon}{i.title}</li>  
                            </Link> 
                            </div> )
                        })}
                        </ul>
                   </div>
                   <div className="log-out">
                        <FiLogOut></FiLogOut>
                        <span onClick={togglepopUp} >Log out</span>
                   </div>
                </div>
                <div className="routes">                
                    {logoutPop && 
                        <div className="bgnd" onClick={togglepopUp}> 
                            <div className="modal">
                                Are you sure you want to log out
                                <div className="btns"> 
                                    <button onClick={togglepopUp}> Go back </button>
                                    <Link to="/signIn"><button> Log out </button></Link>   
                                </div>
                            </div>
                        </div>
                    }
                </div>
    
        </div>
    );
}
 
export default ParentDashboard;
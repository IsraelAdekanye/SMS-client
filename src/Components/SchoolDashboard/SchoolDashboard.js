import { Link} from 'react-router-dom';
import { SchoolSidebar } from './SchoolSidebar';
import './SchoolDashboard.css';
import { GrOrganization} from "react-icons/gr";
import { useState } from 'react';

const SchoolDashboard = () => {

    const [subnav , setSubnav] = useState(false);
    const showSubnav = () => {
        setSubnav(!subnav)
    }

    return ( 
        <div className='schoolDashboard'>
                <div className='sideBar'>
                    <div className='smallProfile'>
                        <span><GrOrganization /> </span>
                        <h6> Institute Name </h6>
                    </div>
                    <ul>
                        {SchoolSidebar.map((i,index) => {
                            return( 
                               <div key={index}>
                                    <Link to={i.path} key={index} onClick={i.subNav && showSubnav} >
                                        <li>
                                            <span>{i.icon} </span>
                                            <span>{i.title}</span>
                                            <div>
                                                {i.subNav && subnav ? i.iconOpened: i.subNav ? i.iconClosed: null }
                                            </div>                                     
                                        </li>                                                        
                                    </Link>   
                                    { subnav && i.subNav?.map( (item, index) => {
                                        return( <Link to={item.path}  key={index}>
                                            <li className='subnav'>
                                                <span>{item.icon}</span>
                                                <span>{item.title}</span> 
                                            </li>
                                        </Link>
                                    ) })}      
                               </div>                        
                            )})                           
                        } 
                    </ul>
                </div>
                <div className='routes'>
            </div>
        </div>
    );
}
 
export default SchoolDashboard;

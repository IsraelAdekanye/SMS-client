import Money from './ImagesTwo/Money.svg';
import card2 from './ImagesTwo/card2.png';
import Phone from './ImagesTwo/Phone.svg';
import Call from './ImagesTwo/Call.svg';
import './Landing-page.css'
import stock from './ImagesTwo/stock.png'
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { ImProfile , ImUserTie } from "react-icons/im";
import Navbartwo from './Navbartwo';
import {Link } from "react-router-dom"
import { useState } from 'react';


const LandingPage = () => {

    const [drop , setDrop] = useState(false);
    const showDropdown = () => {
        setDrop(!drop)
    }
    const [droptwo , setDroptwo] = useState(false);
    const showDropdowntwo = () => {
        setDroptwo(!droptwo)
    }

    return ( 
        <div className='landingpage'>
            <Navbartwo />
            <div className='try'>
                <div className='title'>
                    <h1>School Management<br></br> System</h1>
                    <span> A multi-faceted system providing teamwork between Schools and Parents </span>
                    <Link to="signUp"> <button className='btnOne'>Join us Today</button></Link> 
                    <Link to="/signIn"><button className='btnTwo'>Sign In</button></Link>
                </div>         
                <div className='imgs'>
                    <img src={card2} alt="Parents"></img>
                </div>
            </div>
            <div className='easy'>
                <h1>The easy way out</h1>
                <p className='easySpan'>
                    SMS provides a comprehensive management system that helps you efficiently
                    streamline operations and reduce resources and costs within your school organization.
                </p>
                <div>
                    <div className='administrator' onClick={showDropdown}>
                        <div className='logo1'>
                            <ImProfile></ImProfile>
                        </div>
                        <div className='admin'>
                            <p>School administrators</p>
                        </div>
                        <div className='logoDown'  >
                            {  <FiChevronsDown/> && !drop ? <FiChevronsDown /> : <FiChevronsUp/> }                
                        </div>
                    </div>
                    {drop && <ul className='dropone'>
                        <li > Monitor School activity</li>
                        <li >Prevent financial leakages</li>
                        <li> Increase efficiency by 100% </li>
                    </ul> }
                    <button className='parent' onClick={showDropdowntwo}>
                        <div className='logo2'>
                            <ImUserTie></ImUserTie>
                        </div>
                        <div className='admin'>
                            <p>Parents</p>
                        </div>
                        <div className='logoDown'>
                        {  <FiChevronsDown/> && !droptwo ? <FiChevronsDown /> : <FiChevronsUp/> }                     
                        </div>
                    </button>
                </div>
                {droptwo && <ul className='droptwo'>
                        <li> Monitor your child's school activity performance from anywhere. </li>
                        <li> Easily pay school fees from the comfort of your home. </li>
                        <li> Get notified about your child's school activities. </li>
                        <li>Generate reports with ease</li>
                    </ul> }
            </div>
            <div className='whyChoose'>
            <h1>Why Choose us?</h1>
                <div className='why'>
                    <div>
                        <img className='imgsTwo' src={stock} alt="children"></img>
                    </div>
                    <div className='about'>
                        We provide a perfect framework that the Nigerian education system needs. 
                        The complexity in managing school operations can be reduced with the help of School Management System.
                        We provide unique communication and workflow tools to keep
                        the school, parents and pupils connected in a trackable way.
                        It saves time, effort, preserve records, ease school results compilation,
                        reduces costs and paper work.
                    </div>
                </div>  
            </div> 
            <div className='reasons'>
                <div className="whyAffiliatesPerks" >
                    <div className="manOnMoneyImage">
                        <img src={Money} alt="Money"></img>
                    </div>
                    <div>
                        <div className="manOnMoneyBold" >
                            Fast and Easy fees payment  
                        </div>
                        <div className="manOnMoneyNote">
                            SMS allows direct payment to the school.
                            We provide firm foundation for the school's financial data 
                            by ensuring that transactions are monitored and validated fast with ease.
                        </div>
                    </div>
                </div>
                <div className="whyAffiliatesPerks">
                    <div className="manOnMoneyImage">
                        <img src={Phone} alt="Phone"></img>
                    </div>
                    <div>
                        <div className="manOnMoneyBold">
                            Stress free result compilation 
                        </div>
                        <div className="manOnMoneyNote">
                            Our platform is equipped with a fast, 100% accurate, and effortless result compilation
                            of all students which can be easily accessed on our user friendly and intuitive interface by parents.
                        </div>
                    </div>
                </div>
                <div className="whyAffiliatesPerks" >
                    <div className="manOnMoneyImage">
                        <img src={Call} alt="Call"></img>
                    </div>
                    <div>
                        <div className="manOnMoneyBold">
                            Training and Support
                        </div>
                        <div className="manOnMoneyNote">
                            Change can be daunting and we know. Our experts and support system are here to train and assist you
                            with unlimited support.
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <div className="footerList">
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Featurs</li>
                            <li>How it works</li>
                            <li>Help and support</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="iconAndCopyright">
                        <div className="copyright">
                            © Copyright 2022
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default LandingPage;
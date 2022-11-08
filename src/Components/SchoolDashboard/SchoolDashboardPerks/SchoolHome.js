import React, {useContext} from 'react';
import { IoSchool } from "react-icons/io5";
import { GrWorkshop, GrUserManager, GrGroup, GrCertificate } from "react-icons/gr";
import {  GiMoneyStack} from "react-icons/gi";
import { FaUserTie, FaUsers, FaMoneyBillAlt, FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Link} from 'react-router-dom';
import SchoolDashboard from "../SchoolDashboard"
import { DataContext } from '../../../contexts/StudentsParentsContext';

const SchoolHome = () => {

    const {parentsData, studentsData} = useContext(DataContext)
    return ( 
      <div  style={{display : "flex",minHeight : "100vh" }}>
        <SchoolDashboard />
            <div className="schoolHome">
                <div className="adminAll">
                    <div className="adminName">
                        <p>Admin</p>
                        <p>John Smith</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flexthree">
                    <div className="totalStudents">
                        <h3>{studentsData.length}</h3>
                        <div>
                            <IoSchool />
                            <span>Total Students</span>
                        </div>
                    </div>
                    <div className="totalStudents">
                        <h3> {parentsData.length} </h3>
                        <div>
                            <FaUsers />
                            <span>Total Parents</span>
                        </div>
                    </div>
                    <div className="totalStudents">
                        <h3>38</h3>
                        <div>
                            <FaUserTie />
                            <span>Total Staff</span>
                        </div>
                    </div>
                    <div className="totalStudents">
                        <h3>2,500,000</h3>
                        <div>
                            <FaMoneyBillAlt />
                            <span>Total Income</span>
                        </div>
                    </div>
                </div>
                <h3>School's Management System</h3>
                <div className="flexAll">
                    <div className="people">
                    <Link to="/Students">
                    <GrGroup className="peopleIcon"></GrGroup>
                        <h4> Students</h4></Link>
                    </div>
                    <div className="people">
                        <GrWorkshop className="teachIcon"></GrWorkshop>
                        <h4> Teachers </h4>
                    </div>
                    <div className="people">
                        <Link to="/Parents">
                            <GrUserManager className="teachIcon"></GrUserManager>
                            <h4> Parents </h4> 
                        </Link>
                    </div>
                    <div className="people">
                    <Link to="/Result">  
                            <GrCertificate className="teachIcon"></GrCertificate>
                            <h4> Exam Results </h4> 
                        </Link>
                    </div>
                </div>
                <div className="flexAll">
                    <div className="people">
                        <FaRegListAlt className="teachIcon"></FaRegListAlt>
                        <h4> Bills </h4>
                    </div>
                    <div className="people">
                        <Link to="/Calendar">
                        <FaRegCalendarAlt className="teachIcon"></FaRegCalendarAlt>
                        <h4>School Calendar </h4> </Link>
                    </div>
                    <div className="people">
                    <Link to="/Account">
                        <GiMoneyStack className="teachIcon"></GiMoneyStack>
                            <h4> Accounts </h4>
                    </Link>
                    </div>
                    <div className="people">
                    
                        <h4>  </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolHome;
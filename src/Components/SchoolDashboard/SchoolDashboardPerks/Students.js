import { useState } from "react";
import SchoolDashboard from "../SchoolDashboard";
import axios from 'axios';

const Students = () => {
    
    const loadStudents = async () => {
        axios.get(`/students/`)
        .then(res =>{
            if(!res.status===200)return
            setStudentProfile(res.data)
        })
        .catch(err=>{
            //console.log(err);
        })
    }
    loadStudents()
    const [studentProfile, setStudentProfile ] = useState([]);
    // setStudentProfile

    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
         <div className="students">
            <h3>Total number of Students : {studentProfile.length} </h3>
            <input type="search" placeholder="Search for students" ></input>
            <table>
                <thead>
                    <tr className="studentsThead">
                        <th>S/N</th><th>First Name</th><th>Surname</th> 
                        <th>Class</th><th>Gender</th><th>Address</th>
                        <th> StudentID </th>
                    </tr>
                </thead>
                <tbody>
                    {studentProfile.map((studentDetails, index) => {
                 return  <tr key={index}>
                            <td>{index + 1} </td><td> {studentDetails.firstName.toUpperCase()}</td> 
                            <td> {studentDetails.lastName.toUpperCase()}</td> 
                            <td> {studentDetails.Class}</td>
                            <td> {studentDetails.gender}</td>
                            <td> {studentDetails.address} </td>
                        </tr>
                    })  }
                </tbody>
            </table>
        </div>
       </div>
     );
}
 
export default Students;

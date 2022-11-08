import { useState } from "react";
import SchoolDashboard from "../SchoolDashboard";
import axios from 'axios';

const SchoolParents = () => {

    const loadParents = async () => {
        await axios.get(`/parents/`)
        .then(res =>{
            if(!res.status===200)return
            setParentProfile(res.data)
        })
        .catch(err=>{
            //console.log(err);
        })
    }
    loadParents()

    const [parentProfile, setParentProfile] = useState([])

    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="students">
                <h1>Parents</h1>
                <input type="search" placeholder="Search for Parents" ></input>
                <table>
                    <thead>
                        <tr className="studentsThead">
                            <th>S/N</th>
                            <th> First Name</th> 
                            <th>Surname</th> 
                            <th>Phone Number</th> 
                            <th>Gender</th> 
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parentProfile.map( (profile, index) => {
                        return <tr key={index}>
                            <td>{index + 1} </td> 
                            <td>{profile.firstName.toUpperCase()}</td> 
                            <td>{profile.lastName.toUpperCase()}</td> 
                            <td> {profile.phoneNumber} </td>
                            <td> {profile.gender }</td>
                            <td> {profile.occupation} </td>
                        </tr> } )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default SchoolParents;
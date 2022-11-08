import {React, useState} from 'react';
import axios from 'axios';
import SchoolDashboard from "../../SchoolDashboard";
import { v4 as uuidv4 } from 'uuid';

const StudentForm = () => {

    const [parentData,setParentData] = useState('');
    const [parentDetail,setParentDetail] = useState('');
    const [FirstName, setFirstName] = useState('')
    const [OtherName, setOtherName] = useState('')
    const [Class, setClass] = useState('')
    const [Address, setAddress] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [Gender, setGender] = useState('')

    const searchParent = async (e) => {
        setParentData({lastname: ''})
        if(e.target.value.length<1){
            setParentData({lastname: ''})
            return
        }
        await axios.get(`/parents/${e.target.value.toLowerCase()}`)
        .then(res =>{
            if(!res.status===200)return
            setParentData(res.data[0])
        })
        .catch(err=>{
            //console.log(err);
        })
    }

    const assignParentID = (e) => {
        //e.preventDefault()
        setParentDetail({id: parentData._id, lastName: parentData.lastName, origin: parentData.origin})
    }

    const createStudent = async (e) => {
        e.preventDefault()
        const postParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {parentID: parentDetail.id, 
                firstName: FirstName, 
                lastName: parentDetail.lastName,
                otherName: OtherName,
                stateOfOrigin: parentDetail.origin,
                Class: Class,
                address: Address,
                dateOfBirth: DateOfBirth,
                gender: Gender,
                uuid: uuidv4()
            })
        }
        await fetch('/students', postParams)
        .then(res => {
            if (res.status === 200){
            console.log(res.json())
            setParentData([{lastname: '', firstName: ''}]); setParentDetail(''); setFirstName(''); setOtherName(''); 
            setClass(''); setAddress(''); setDateOfBirth(''); setGender('');

            return
            }
            else {
                console.log(res.json());
            }
        } )
    }


    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
        <SchoolDashboard />
            <div className="forms">
                <div className="newProfile">
                    <h3>Register New Student</h3>
                    <form className="newStudent" onSubmit={createStudent} >
                    <div className="flexthree">
                            <div className="formNames"> 
                                <label>Search Parent by Surname</label>
                                <input type='text' placeholder='Enter Surname' onChange={searchParent}></input>

                                <input value={parentData.lastName} disabled></input>
                                <button onClick={assignParentID}>Assign ID</button>

                                <label>Parent ID</label>
                                <input value={parentDetail.id} />

                                <label> Last Name </label>
                                <input type="text" value={parentDetail.lastName}/>

                                <label> First Name </label>
                                <input type="text" onChange={e => setFirstName(e.target.value)} value={FirstName} required />
                                
                                <label> Other Name </label>
                                <input type="text" onChange={e => setOtherName(e.target.value)} value={OtherName} required />

                                <label>State of Origin </label>
                                <input type="text" value={parentDetail.origin} />
                            </div>
                            <div className="formClass">
                                {/* <label> Nationality </label>
                                <input type="text" required /> */}
                                <label> Class </label>
                                <select  className="select" onChange={e => setClass(e.target.value)} >
                                    <option value="JSS 1">JSS 1</option>
                                    <option value="JSS 2">JSS 2</option> 
                                    <option value="JSS 3">JSS 3</option> 
                                    <option value="SSS 1">SSS 1</option>  
                                    <option value="SSS 2">SSS 2</option> 
                                    <option value="SSS 3">SSS 3</option> 
                                </select>
                                <label> Home Address </label>
                                <input type="text" onChange={e => setAddress(e.target.value)} value={Address}></input>
                                <label > Date of Birth </label>
                                <input type="date" onChange={e => setDateOfBirth(e.target.value)} value={DateOfBirth} required name="birthday"/>
                                {/* <label> Blood Group </label>
                                <select  className="select" onChange={e => setBloodGroup(e.target.value)}>
                                    <option value="Class1"> A Positive</option>
                                    <option value="Class2"> A Negative </option> 
                                    <option value="Class4">B Positive</option>  
                                    <option value="Class2"> B Negative </option> 
                                    <option value="Class3"> AB </option> 
                                    <option value="Class4">O Positive</option>  
                                    <option value="Class4">O Negative</option>  
                                </select> */}
                            </div>
                    </div>
                        <div className="formRadio" onChange={e => setGender(e.target.value)} >
                            <label htmlFor="male"> Male </label>
                            <input type="radio" name="gender" value="MALE"  />
                            <label htmlFor="female"> Female </label>
                            <input type="radio" name="gender" value="FEMALE" /> 
                        </div> 
                        <button>Submit</button>  
                    </form>
                </div>
            </div>
       </div>
     );
}
 
export default StudentForm;
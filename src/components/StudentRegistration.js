
import {React, useState} from 'react';
import axios from 'axios';

const StudentRegistration = () => {

    const [parentData,setParentData] = useState([{lastname: '', firstName: ''}]);
    const [parentDetail,setParentDetail] = useState('');
    const [FirstName, setFirstName] = useState('')
     //const [LastName, setLastName] = useState('')
    // const [ParentID, setParentID] = useState('')
    const [error, setError] = useState(null)


    const searchParent = (e) => {
        setParentData({lastname: ''})
        if(e.target.value.length<1){
            setParentData({lastname: ''})
            return
        }
        axios.get(`/parents/${e.target.value.toLowerCase()}`)
        .then(res =>{
            if(!res.status===200)return
            setParentData(res.data[0])
        })
        .catch(err=>{
            //console.log(err);
        })
    }

    const assignParentID = (e) => {
        e.preventDefault()
        setParentDetail({id: parentData._id, lastName: parentData.lastName})
    }

    const createStudent = async (e) => {
        e.preventDefault()
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {parentID: parentDetail.id, 
                firstName: FirstName, 
                lastName: parentDetail.lastName
            })
        }
        fetch('/students', requestParams)
        .then(res => console.log(res.json()))
    }

    return (  
        <div>
            <h1>Student Registration</h1>
            <form action=''>
                <label>Search Parent by Name</label>
                <input type='text' placeholder='Enter Surname' onChange={searchParent}></input>
                <input value={`${parentData.lastName} ${parentData.firstName}`} disabled></input>
                <button onClick={assignParentID}>Assign</button>
            </form>
            <form onSubmit={createStudent}>
                <label>Parent ID</label>
                <input value={parentDetail.id}>
                </input>

                <label>Surname</label>
                <input value={parentDetail.lastName}>
                </input>

                <label>First Name</label>
                <input placeholder='Enter First Name' 
                    value = {FirstName} onChange={(e)=>{setFirstName(e.target.value)}}>
                </input>

                <button type='submit'>Add Student</button>
            </form>
    </div>
        
    );
}

export default StudentRegistration;
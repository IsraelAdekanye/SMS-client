import React, {useState} from 'react';
import SchoolDashboard from "../../SchoolDashboard";

const ParentForm = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [OtherName, setOtherName] = useState('')
    const [Email, setEmail] = useState('')
    const [Origin, setOrigin] = useState('')
    const [Occupation, setOccupation] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [Gender, setGender] = useState('')

    const createParent = async (e) => {
        e.preventDefault()
        const postParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {firstName: FirstName, 
                lastName: LastName,
                otherName: OtherName,
                email: Email,
                origin: Origin,
                occupation: Occupation,
                phoneNumber: PhoneNumber,
                address: Address,
                dateOfBirth: DateOfBirth,
                gender: Gender
            })
        }
        await fetch('/parents', postParams)
        .then(res => {
            if (res.status === 200) {
                console.log(res.json())
                setFirstName(''); setLastName(''); setOtherName(''); setEmail(''); setOccupation('');
                setPhoneNumber(''); setAddress(''); setDateOfBirth(''); setGender('');
                
            }
         })
    }

    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="forms">
                <div className="newProfile">
                    <h3>Register New Parent/Guardian</h3>
                    <form className="newStudent" onSubmit={createParent} >
                    <div className="flexthree">
                            <div className="formNames"> 
                                <label> First Name </label>
                                <input type="text" onChange={e => setFirstName(e.target.value)} value={FirstName} required />
                                <label> Last Name </label>
                                <input type="text" onChange={e => setLastName(e.target.value)} value={LastName} required />
                                <label> Other Name </label>
                                <input type="text" onChange={e => setOtherName(e.target.value)} value={OtherName} required/>
                                <label> Email </label>
                                <input type="email" onChange={e => setEmail(e.target.value)} value={Email} required />
                                <label> State of Origin </label>
                                <input type="text" onChange={e => setOrigin(e.target.value)} value={Origin} required />
                                <label> Occupation </label>
                                <input type="text" onChange={e => setOccupation(e.target.value)} value={Occupation} required />
                            </div>
                            <div className="formClass">
                                <label> PhoneNumber </label>
                                <input type='phone' onChange={e => setPhoneNumber(e.target.value)} value={PhoneNumber} required />
                                <label> Home Address </label>
                                <input type='text' onChange={e => setAddress(e.target.value)} value={Address} required ></input>
                                <label> Date of Birth </label>
                                <input type="date" onChange={e => setDateOfBirth(e.target.value)} value={DateOfBirth} required />
                            </div>
                    </div>
                    <div className="formRadio" onChange={e => setGender(e.target.value)} >
                            <label htmlFor="male"> Male </label>
                            <input type="radio" name="gender" value="MALE"  />
                            <label htmlFor="female"> Female </label>
                            <input type="radio" name="gender" value="FEMALE" /> 
                        </div> 
                    
                        <button type="submit" >Submit</button>  
                    </form>
                </div>
            </div>
       </div>
    );
}

export default ParentForm;
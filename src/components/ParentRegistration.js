import React, {useState} from 'react';

const ParentRegistration = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    const createParent = async (e) => {
        e.preventDefault()
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {firstName: FirstName, 
                lastName: LastName
            })
        }
        fetch('/parents', requestParams)
        .then(res => console.log(res.json()))
    }


    return (
        <div>
            <h1>Parent Registration</h1>
            <form onSubmit={createParent}>
                <label>FirstName</label>
                <input type='text' placeholder='Enter First Name' onChange={e => setFirstName(e.target.value)}></input>

                <label>LastName</label>
                <input type='text' placeholder='Enter Last Name' onChange={e => setLastName(e.target.value)}></input>

                <button type='submit'>Add Parent</button>
            </form>
        </div>
    );
}
 
export default ParentRegistration;
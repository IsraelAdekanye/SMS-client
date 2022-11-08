import SchoolDashboard from "../../SchoolDashboard";

const Staff = () => {
    return ( 
        <div style={{display : "flex", minHeight : "100vh" }}>
            <SchoolDashboard />  
            <div className="newProfile">
                <h3>Register New Staff</h3>
                <form className="newStudent">
                   <div className="flexthree">
                   <div className="formNames"> 
                        <label> Last Name </label>
                        <input type="text" />
                        <label> First Name </label>
                        <input type="text" />
                        <label> Middle Name </label>
                        <input type="text" />
                   </div>
                   <div className="formClass">
                        <label> Class </label>
                        <input type="text" />
                        <label> Home Address </label>
                        <input type="text" />
                        <label> Date of Birth </label>
                        <input type="text" />
                   </div>
                   </div>
                   <div className="formRadio">
                        <label htmlFor="male"> Male </label>
                        <input type="radio" name="gender" value="male"  />
                        <label htmlFor="female"> Female </label>
                        <input type="radio" name="gender" value="female" /> 
                    </div> 
                </form>
            </div>
        </div>
     );
}
 
export default Staff;
const SignUp = () => {
    return ( 
        <div className="signup">
            <h2> Sign-Up </h2>
            <div className="signup-form" >
                <form>
                    <input type="text" required placeholder="Name of School" />
                    <input type="text" required placeholder="Principal/Admin's Name" />
                    <input type="email" required placeholder="Enter School's Email" />
                    <input type="text" required placeholder="Phone-Number" />
                    <h4>School's Location</h4>
                    <input type="text" required placeholder="County Located" />
                    <input type="text" required placeholder="State Located" />
                    <input type="text" required placeholder="School Address" />
                    <h4>Staffing and Students</h4>
                    <input type="text" required placeholder="Number of Sudents" />
                    <input type="text" required placeholder="Number of Staff" /> 
                    <h4>Password</h4>                   
                    <input type="password" required placeholder="Create Password" />
                    <input type="password" required placeholder="Confirm Password" />
                    <div>
                        <button> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default SignUp;
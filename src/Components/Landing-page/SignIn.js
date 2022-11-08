import sign from "./ImagesTwo/sign.svg"

const SignIn = () => {
    return ( 
       <div className="signin">
            <div className="left-side">
                <img src={sign} alt="Sign In" />
            </div>
            <div className="signinForm">
                <h2>Sign In</h2>
                <form>
                    <input type="email"  placeholder="Email"  />
                    <input type="password"  placeholder="Password" />
                    <button> Sign In </button>
                </form>
            </div>
            
        </div>
    );
}
 
export default SignIn;
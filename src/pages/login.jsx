import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";

const Login = () => {

    const [email, setUserMail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password)
        dispatch(loginUser({email, password}))
    }

    return(
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="userMail">Username</label>
                            <input type="email" id="userMail" value={email} onChange={(e)=>setUserMail(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={handleLogin}>Sign In</button> 
                    </form>
                </section>
            </main>
        </>
        );
};

export default Login;
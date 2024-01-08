import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, addToken } from "../redux/authSlice";
import { loginUser } from "../utils/loginUser.js";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../utils/getUserInfo.js";

const Login = () => {
  const [email, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser({ email, password }));

    if (response) {
      const role = window.localStorage.getItem("token");
      const output = JSON.parse(role);
      dispatch(addToken(output));

      const result = await getUserInfo(output);
      if (result) {
        const newState = {
          token: output,
          ...result.body,
        };
        dispatch(setUser(newState));
        navigate("/user");
      }
    }
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="userMail">Email</label>
              <input
                type="email"
                id="userMail"
                value={email}
                onChange={(e) => setUserMail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;

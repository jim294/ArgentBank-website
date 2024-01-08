import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from "../redux/authSlice.js";

const Header = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const name = user.token !== null ? user.userName : "Sign In";
    console.log(name)
    console.log(user)
    const linkName = user.token !== null ? "/user" : "/login";

    function logOut() {
        dispatch(clearUser());
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
        navigate('/');
    }
    return (
    <header>
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src="img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={linkName}>
                <i className="fa fa-user-circle"></i>
                {name}
                </Link>
                {user.token !== null && (
                        <Link className="main-nav-item" to="/" onClick={logOut}>
                            <i className="fa fa-sign-out" />
                            Sign Out
                        </Link> 
                )}
            </div>
        </nav>
    </header>
    );
};

export default Header;
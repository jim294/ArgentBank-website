import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <header>
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src="img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className="main-nav-item" to="/login">
                <i className="fa fa-user-circle sign-in-icon"></i>
                Sign In
                </NavLink>
            </div>
        </nav>
    </header>
    );
};

export default Header;
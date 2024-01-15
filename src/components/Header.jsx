import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../utils/logOut.js";

const Header = () => {
  const user = useSelector((state) => state.user);

  const name = user.token !== null ? user.userName : "Sign In";
  const linkName = user.token !== null ? "/user" : "/login";

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-item">
          <Link to={linkName}>
            <div className="main-nav-item-form">
              <i className="fa fa-user-circle"></i>
              <p>{name}</p>
            </div>
          </Link>
          {user.token !== null && <Logout />}
        </div>
      </nav>
    </header>
  );
};

export default Header;

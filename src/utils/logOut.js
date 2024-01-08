import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/authSlice.js';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(clearUser());
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Link className="main-nav-item" to="/" onClick={logOut}>
            <i className="fa fa-sign-out" />
            Sign Out
        </Link>
    );
};

export default Logout;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputUser } from "../components/InputUser.jsx";
import { updateInfo } from "../utils/updateInfo.js";
import { updateUser } from "../redux/authSlice.js";

const User = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [newUserName, setNewUserName] = useState(user.userName);

  const handleEditNameClick = () => {
    setEditName(true);
  };

  const role = window.localStorage.getItem("token");
  const output = JSON.parse(role);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    const response = await updateInfo(output, newUserName);
    if (response) {
      dispatch(updateUser(newUserName));
      alert("Username updated");
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditName(false);
  };

  useEffect(() => {
    if (!output) {
      navigate("/");
    }
  }, [output, navigate]);

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>
          {editName ? (
            <form className="formUpdateEditName">
              <InputUser
                type="text"
                name="username"
                defaultValue={newUserName}
                labelName="User name:"
                onChange={(e) => setNewUserName(e.target.value)}
              />

              <InputUser
                type="text"
                id="firstName"
                defaultValue={user.firstName}
                labelName="First name:"
                disabled={true}
              />

              <InputUser
                type="text"
                id="lastName"
                defaultValue={user.lastName}
                labelName="Last name:"
                disabled={true}
              />

              <div className="formBtnUpdateName">
                <button className="btn save-btn" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="btn cancel-btn" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button className="edit-button" onClick={handleEditNameClick}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default User;

import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { useAlert } from "react-alert";

const Profile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    navigate("/");
  }

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Fragment>
        <MetaData title="Profile Not Found" />
        <div className="profileContainer">
          <h2>User Profile Not Available</h2>
          <Link to="/login" className="btn">
            Go to Login
          </Link>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MetaData title={`${user.name}'s Profile`} description="Your Profile -- Grocery Store" />

      <div className="profileContainer">
        <div className="pics">
          <img src={user.avatar && user.avatar.url} alt={user.name} />
          <h4>{user.name}</h4>
          <Link to="/me/update" className="edit">
            Edit Profile
          </Link>
        </div>

        <div className="details">
          <h4>Email</h4>
          <p>{user.email}</p>

          <h4>Joined On</h4>
          <p>{user.createdAt ? String(user.createdAt).substring(0, 10) : "N/A"}</p>

          <button onClick={logoutUser} className="btn">
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;

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
  let { user, loading, isAuthenticated } = useSelector((state) => state.user);
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

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title={`${user.name}'s Profile`}
            description="Your Profile -- Grocery Store "
          />

          <div className="profileContainer">
            <div className="pics">
              <img src={user.avatar.url} alt={user.name} />

              <h4>{user.name}</h4>
              <Link to="/me/update" className="edit">
                Edit Profile{" "}
              </Link>
            </div>

            <div className="details">
              <h4>Email</h4>
              <p>{user.email}</p>

              <h4>Joined On</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>
              <button onClick={logoutUser} className="btn">
                {" "}
                Logout
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;

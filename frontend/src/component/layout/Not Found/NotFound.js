import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import MetaData from "../MetaData";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <MetaData
        title="Page not Found"
        description=" Unaccessible Page | Not Found "
      />
      <h1>Oops!</h1>

      <h5 className="page"> 404 - Page Not Found </h5>
      <p className="desc"> The page you are looking for is unavailable </p>

      <Link to="/"> Go To HomePage </Link>
    </div>
  );
};

export default NotFound;

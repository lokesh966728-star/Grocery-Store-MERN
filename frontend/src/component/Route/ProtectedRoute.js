import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/account",
}) => {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return navigate(redirect);
  }

  if (adminRoute && !isAdmin) {
    return navigate(redirectAdmin);
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

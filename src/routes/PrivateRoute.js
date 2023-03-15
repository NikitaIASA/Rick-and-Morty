import { Navigate } from "react-router-dom";

import { UserAuth } from "../context/AuthProvider";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { user } = UserAuth();
  const isNotAuthenticated = !user;
  
  return isNotAuthenticated ? <Navigate to={redirectTo} /> : Component;
};

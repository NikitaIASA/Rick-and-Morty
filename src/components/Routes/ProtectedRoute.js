import { Navigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthProvider";

export const ProtectedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { user } = UserAuth();
  return user ? <Navigate to={redirectTo} /> : Component;
};

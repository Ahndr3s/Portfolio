import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoutes = () => {
  return <Navigate to={"/home"} />;
};

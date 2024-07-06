import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivetRoute() {
    const userInfo = useSelector((state) => state.user);
    console.log(userInfo);
  
    return userInfo.user.currentUser===null ? <Navigate to="/sign-in" /> : <Outlet />;
}

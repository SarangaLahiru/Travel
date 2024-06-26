import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from '../context/contextProvider';

export default function Guest() {
  const { setToken, token } = useStateContext();
  if (token) {

    return <Navigate to="/user" />

  }
  return (
    <div>


      <Outlet />

    </div>
  )
}

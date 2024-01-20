import React from "react";
import { Outlet } from "react-router-dom";

export default function MainComp() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

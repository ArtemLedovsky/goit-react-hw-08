import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div className="relative  bg-amber-50 min-h-screen">
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;

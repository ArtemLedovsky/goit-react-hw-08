import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <nav className="flex gap-4">
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;

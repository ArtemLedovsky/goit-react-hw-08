import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import UserMenu from "./UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="bg-neutral-800 text-white flex items-center justify-between px-4 py-4">
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(<Navigate to="/login" /> & toast("Goodbye!"));
  };

  return (
    <div className="flex gap-6 items-center">
      <p>Welcome, {user.name}</p>
      <button
        className="btn btn-soft btn-error btn-xs text-neutral-800"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

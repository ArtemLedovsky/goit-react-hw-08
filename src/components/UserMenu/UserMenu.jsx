import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-6 items-center">
      <p>Welcome, {user.name}</p>
      <button
        className="btn btn-soft btn-error btn-xs text-neutral-800"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

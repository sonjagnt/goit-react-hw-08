import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <p>Welcome, {user.name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="outlined"
        style={{ textTransform: "capitalize" }}
      >
        Log Out
      </Button>
    </div>
  );
};

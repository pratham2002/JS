import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../redux/action";

function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.location.replace("/Homepage");
    console.log("location changed");
  };

  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
      <div>
        <Link to="/Homepage">HomePage</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

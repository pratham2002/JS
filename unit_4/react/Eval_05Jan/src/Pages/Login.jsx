import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/action";

export function Login() {
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(loginSuccess("Available"));
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleAuth}>Click Me to continue</button>
    </div>
  );
}

export default Login;

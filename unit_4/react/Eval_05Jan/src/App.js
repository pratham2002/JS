import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
// import HomePage from "./Pages/Homepage";
import { Login } from "./Pages/Login";
import Routes from "./routes/routes";
import "./styles.css";

export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  // console.log(isAuth);

  if (isAuth) {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  } else {
    return <Login />;
  }
}

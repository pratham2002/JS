// import { NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Routes from "./routes/routes";
import Navbar from './Delivery/Navbar';
import Routes from './Delivery/routes/FoodRoutes';
// import Search from './Delivery/Search';
import "./styles.css";

export default function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes />
    </div>
    </>
  );
}

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import Routes from '../../users/src/routes/routes';
import Routes from './Routes/routes';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes/>      
    </div>
  );
}

export default App;

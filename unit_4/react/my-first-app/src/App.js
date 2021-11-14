import './App.css';
import ContactUs from './Components/React_menu/ContactUs'
import List from './Components/list/List';
import Download from './Components/React_menu/Download';
import Help from './Components/React_menu/Help';
import Settings from './Components/React_menu/Settings';
import Home from './Components/React_menu/Home';
import JoinUS from './Components/React_menu/JoinUs';
import Search from './Components/React_menu/Search';
import Login from './Components/React_menu/Login';


function App() {
  return (
    <div className="App App-header">
      {/* <List/> */}
      <div className="Button-List">
      <JoinUS/>
      <Settings/>
      <Login/>
      <ContactUs/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
      </div>
    </div>
  );
}

export default App;

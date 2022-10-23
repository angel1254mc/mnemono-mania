import logo from './logo.svg';
import './css/App.css';
import HomeScreen from './components/HomeScreen.js';
import AboutComponent from './components/AboutComponent.js';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import CollectionsComponent from './components/CollectionsComponent';

function App() {
  return (
    <Router>
    <div className="App">
       {/** Semantic Element for header - Maybe replace with Navbar*/}
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <Switch>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/collections" element={<CollectionsComponent/>}/>
      </Switch>   
    </div>
    </Router>
  );
}

export default App;

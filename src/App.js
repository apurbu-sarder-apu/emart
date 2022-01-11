import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes , Route} from "react-router-dom";
import Products from "./component/Products";

function App() {
  return (
      <>
      <Navbar/>
      <Routes >
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
      </Routes >
      <Home/>
      </>
  );
}

export default App;

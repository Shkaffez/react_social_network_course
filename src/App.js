import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Friends from './components/SideBar/Friends';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <Friends store={props.store}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs store={props.store}/>}/>
          <Route path="/profile" render={ () => <Profile  store={props.store}/>}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header title="This is header"/>

      <Nav title="This is navbar"/>
      {/* <Profile title="Ava plus description"/> */}


      <div className="app-wrapper-content" >
       
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile} />
      </div>

      <Footer title="this is footer"/>
    </div>
    </BrowserRouter>
  )
}

export default App;

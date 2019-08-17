import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header title="This is header"/>

      <Nav title="This is navbar"/>
      {/* <Profile title="Ava plus description"/> */}


      <div className="app-wrapper-content" >
        {/* <Profile title="Profile" /> */}
        <Dialogs title="Dialogs" />
      </div>

      <Footer title="this is footer"/>
    </div>
  )
}

export default App;

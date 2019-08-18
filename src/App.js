import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header title="This is header"/>
        <Nav data={props.appState.navbarLinks}/>
      <div className="app-wrapper-content" >
        <Route path="/dialogs" render={ () => <Dialogs data={props.appState.dialogItems}/>}/>
        <Route path="/profile" render={() =>  <Profile data={props.appState.msgData}/>}/>
      </div>
        <Route path="/dialogs/1" component={Footer} />
        <Footer title="this is footer"/>
    </div>
    </BrowserRouter>
  )
}

export default App;

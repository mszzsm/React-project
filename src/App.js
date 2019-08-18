import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  const dialogItems = [
    { user: "Michał Sztefanica", status: "", id: "1", msg: "Witam od Michała" },
    { user: "Michał Sztefanica", status: "", id: "2", msg: "Witam od Daniela" },
  ]

  const msgData = [
    { id: '1', user: 'User1', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias modi alias dolorem', likes: 23 },
    { id: '2', user: 'User2', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
  ]

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header title="This is header"/>
      <Nav title="This is navbar"/>
      <div className="app-wrapper-content" >
        <Route path="/dialogs" render={ () => <Dialogs data={dialogItems}/>}/>
        <Route path="/profile" render={ () => <Profile data={msgData}/>}/>
      </div>
        <Route path="/dialogs/1" component={Footer} />
        <Footer title="this is footer"/>
    </div>
    </BrowserRouter>
  )
}

export default App;

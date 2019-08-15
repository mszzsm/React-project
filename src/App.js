import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://picsum.photos/200/300/?blur"  alt="asd"/>
      </header>

      <nav className="nav"> 
       
          <div>
            Profile
          </div>
          <div>
            Message
          </div>
          <div>
            Main Content
          </div>
        
      </nav>

    <div className="content">
      </div>

      <footer> 

      </footer>
    </div>
    
  )

}

export default App;

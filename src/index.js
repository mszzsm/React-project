import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import State from './state'


let dialogItems = [
    { user: "Michał Sztefanica", status: "", id: "1", msg: "Witam od Michała" },
    { user: "Michał Sztefanica", status: "", id: "2", msg: "Witam od Daniela" },
]

let msgData = [
        { id: '1', user: 'User1', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias modi alias dolorem', likes: 23 },
        { id: '2', user: 'User2', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
    ]

ReactDOM.render(<App dialog={dialogItems} msg={msgData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

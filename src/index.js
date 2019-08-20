import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state.js'
import { BrowserRouter } from 'react-router-dom';

let RenderEntireTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store} addPost={store} changeNewPostText={store} />
        </BrowserRouter>, document.getElementById('root')
    );
}

RenderEntireTree(store.state);
store.subscribe(RenderEntireTree);
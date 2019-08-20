import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { subscribe } from "./redux/state.js";
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js'

import { AddPost, changeNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

let RenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={AddPost} changeNewPostText={changeNewPostText} />
        </BrowserRouter>, document.getElementById('root')
    );
}

RenderEntireTree(state);

subscribe(RenderEntireTree);
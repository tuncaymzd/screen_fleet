/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.crossDomain = true;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

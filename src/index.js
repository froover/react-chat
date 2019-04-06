import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import registerServiceWorker from './serviceWorker';
import * as serviceWorker from './serviceWorker';
import AppChat from './components/AppChat';
import InjectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(<AppChat />, document.getElementById('root'));
serviceWorker.unregister();

// registerServiceWorker();

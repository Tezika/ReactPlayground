import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pet from './components/pet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pet />, document.getElementById('root'));
registerServiceWorker();

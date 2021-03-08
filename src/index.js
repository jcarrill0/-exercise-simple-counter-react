import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SecondsCounter from './component/SecondsCounter';

let seconds = 0;

setInterval(() => {
  seconds++

  ReactDOM.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//open to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

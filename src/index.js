import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

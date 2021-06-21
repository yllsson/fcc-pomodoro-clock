import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroApp from './components/PomodoroApp';
import './styles/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <PomodoroApp />
  </React.StrictMode>,
  document.getElementById('root')
);

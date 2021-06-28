import React, { useState } from 'react';
import Settings from './Settings';
import SessionSettings from './SessionSettings';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <Settings name={'break'} length={breakLength}/>
        <Settings name={'session'} length={sessionLength}/>
      </div>

      <section className='container flexColumn'>
        <h2 id='timer-label'>Session</h2>

        <div id='time-left'>
          {minutes}:{seconds}
        </div>

        <div className='container flexRow'>
          <button id='start_stop'>{'Start'}</button>
          <button id='reset'>Reset</button>
        </div>
      </section>
    </main>
  );
};

export default PomodoroApp;

import React, { useState } from 'react';
import BreakSettings from './BreakSettings';
import SessionSettings from './SessionSettings';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <BreakSettings />
        <SessionSettings />
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

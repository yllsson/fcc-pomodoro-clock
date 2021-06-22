import React, { useState } from 'react';
import BreakSettings from './BreakSettings';
import SessionSettings from './SessionSettings';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <section className='flexRow'>
        <BreakSettings />
        <SessionSettings />
      </section>

      <section className='container flexColumn'>
        <h2 id='timer-label'>Session</h2>

        <div id='time-left'>
          {minutes}:{seconds}
        </div>

        <section className='flexRow startStopContainer'>
          <button id='start_stop'>{'Start'}</button>
          <button id='reset'>Reset</button>
        </section>
      </section>
    </main>
  );
};

export default PomodoroApp;

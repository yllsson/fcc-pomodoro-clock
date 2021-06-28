import React, { useState } from 'react';
import Settings from './Settings';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <Settings
          name={'break'}
          length={breakLength}
          setLength={setBreakLength}
        />
        <Settings
          name={'session'}
          length={sessionLength}
          setLength={setSessionLength}
        />
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

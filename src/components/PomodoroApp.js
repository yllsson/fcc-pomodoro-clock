import React, { useState } from 'react';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  return (
    <main>
      <h1>Pomodoro clock</h1>
      <section className='breakContainer'>
        <h2 id='break-label'>Break Length</h2>

        <button id='break-decrement'>-</button>
        <div className='breakDisplay' id='break-length'>
          {breakLength}
        </div>
        <button id='break-increment'>+</button>
      </section>

      <section className='sessionContainer'>
        <h2 id='session-label'>Session Length</h2>

        <button id='session-decrement'>-</button>
        <div className='sessionDisplay' id='session-length'>
          {sessionLength}
        </div>
        <button id='session-increment'>+</button>
      </section>

      <section>
        <h2 id='timer-label'>Session</h2>
        <div id='time-left'>
          {minutes}:{seconds}
        </div>
      </section>

      <section>
        <button id='start_stop'>{'Start'}</button>
        <button id='reset'>Reset</button>
      </section>
    </main>
  );
};

export default PomodoroApp;

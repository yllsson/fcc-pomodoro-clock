import React, { useState, useEffect } from 'react';
import Settings from './Settings';
// import Session from './Session';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');
  const [isRunning, setIsRunning] = useState(false);
  const [loop, setLoop] = useState();

  const startInterval = () => {
    return setInterval(() => console.log('interval is running'), 1000);
  };

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);

    if (!isRunning) {
      console.log(isRunning);
      setLoop(startInterval());
    } else {
      console.log('cleaning');
      clearInterval(loop);
    }
  };

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
        <h2 id='timer-label'>{sessionName}</h2>
        <p id='time-left'>
          {minutes}:{seconds}
        </p>

        <div className='container flexRow'>
          <button
            id='start_stop'
            onClick={() => {
              handleStartStop();
            }}
          >
            {!isRunning ? 'Start' : 'Pause'}
          </button>
          <button id='reset' onClick={() => clearInterval()}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default PomodoroApp;

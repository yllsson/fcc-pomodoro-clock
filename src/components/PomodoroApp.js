import React, { useState, useEffect } from 'react';
import Settings from './Settings';

const PomodoroApp = () => {
  // const [didMount, setDidMount] = useState(false);
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  // const [minutes, setMinutes] = useState(25);
  // const [seconds, setSeconds] = useState(3);
  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');
  const [isRunning, setIsRunning] = useState(false);
  const [loop, setLoop] = useState();

  const formatTime = (timeInSeconds) => {
    const mins = timeInSeconds / 60;
    const secs = timeInSeconds % 60;
    return (
      (mins < 10 ? `0${mins}` : mins) + ':' + (secs < 10 ? `0${secs}` : secs)
    );
  };

  const startInterval = () => {
    return setInterval(() => {
      setSeconds((prevState) => prevState - 1);
    }, 1000);
  };

  const stopInterval = () => {
    console.log('cleaning');
    clearInterval(loop);
  };

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);

    if (!isRunning) {
      setLoop(startInterval());
    } else {
      stopInterval();
    }
  };

  // useEffect(() => setDidMount(true), []);

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <Settings
          name={'break'}
          length={breakLength}
          setLength={setBreakLength}
          formatTime={formatTime}
        />
        <Settings
          name={'session'}
          length={sessionLength}
          setLength={setSessionLength}
          formatTime={formatTime}
        />
      </div>

      <section className='container flexColumn'>
        <h2 id='timer-label'>{sessionName}</h2>
        <p id='time-left'>{formatTime(sessionLength)}</p>

        <div className='container flexRow'>
          <button
            id='start_stop'
            onClick={() => {
              handleStartStop();
            }}
          >
            {!isRunning ? 'Start' : 'Pause'}
          </button>
          <button
            id='reset'
            onClick={() => {
              setMinutes(25);
              setSessionLength(25);
              setBreakLength(5);
              stopInterval();
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default PomodoroApp;

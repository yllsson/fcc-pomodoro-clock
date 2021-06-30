import React, { useState, useEffect } from 'react';
import Settings from './Settings';
// import Session from './Session';

const PomodoroApp = () => {
  const [didMount, setDidMount] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(3);
  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');
  const [isRunning, setIsRunning] = useState(false);
  const [loop, setLoop] = useState();

  const startInterval = () => {
    return setInterval(() => {
      setSeconds((prevState) => prevState - 1);
    }, 1000);
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

  useEffect(() => setDidMount(true), []);

  /* this allows seconds to turn to 59 as soon as the timer kicks off, but it also makes seconds 59 on reset, so that's still an issue */
  // useEffect(() => {
  //   if (didMount && seconds === 0) {
  //     setSeconds(59);
  //   }
  // }, [seconds]);

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
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
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
          <button
            id='reset'
            onClick={() => {
              setMinutes(25);
              setSessionLength(25);
              setBreakLength(5);
              setSeconds(0);
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

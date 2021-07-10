import React, { useState, useEffect } from 'react';
import BlockDisplay from './BlockDisplay';
import BlockSettings from './BlockSettings';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [blockLength, setBlockLength] = useState(25 * 60);

  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');

  const formatTime = (length) => {
    const mins = Math.floor(length / 60);
    const secs = length % 60;
    return (
      (mins < 10 ? `0${mins}` : mins) + ':' + (secs < 10 ? `0${secs}` : secs)
    );
  };

  const runTimer = () => {
    const second = 1000;
    let now = new Date().getTime();
    let then = new Date().getTime() + second;
    let isOnBreak = onBreak;

    if (!isRunning) {
      let interval = setInterval(() => {
        now = new Date();
        now = now.getTime();

        if (now > then) {
          console.log(blockLength);

          setBlockLength((prevState) => prevState - 1);
          then += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    } else {
      stopInterval();
    }

    setIsRunning(!isRunning);
  };

  const stopInterval = () => {
    console.log('cleaning');
    clearInterval(localStorage.getItem('interval-id'));
  };

  useEffect(() => {
    // do I need if statement for isRunning? if the useEffect watches for sessionName to change, it won't actually reset the blockLength until the timer hits 0...
    // if (!isRunning) {
    if (sessionName === 'Session') {
      setBlockLength(sessionLength * 60);
    } else if (sessionName === 'Break') {
      setBlockLength(breakLength * 60);
    }
    // }
  }, [sessionName]);

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <BlockSettings
          name={'break'}
          length={breakLength}
          setLength={setBreakLength}
          setBlockLength={setBlockLength}
        />
        <BlockSettings
          name={'session'}
          length={sessionLength}
          setLength={setSessionLength}
          setBlockLength={setBlockLength}
        />
      </div>

      <section className='container flexColumn'>
        <BlockDisplay
          formatTime={formatTime}
          blockLength={blockLength}
          sessionName={sessionName}
        />

        <div className='container flexRow'>
          <button
            id='start_stop'
            onClick={() => {
              runTimer();
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

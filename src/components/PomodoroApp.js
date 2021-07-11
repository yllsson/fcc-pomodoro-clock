import React, { useState, useEffect } from 'react';
import BlockDisplay from './BlockDisplay';
import BlockSettings from './BlockSettings';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(0.1);
  const [sessionLength, setSessionLength] = useState(0.1);
  const [blockLength, setBlockLength] = useState(0.1 * 60);

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

    if (!isRunning) {
      console.log('running');
      let interval = setInterval(() => {
        now = new Date().getTime();
        if (now > then) {
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

  const reset = () => {
    setSessionLength(25);
    setBreakLength(5);
    stopInterval();
    setIsRunning(false);
    setOnBreak(false);
    setBlockLength(25 * 60);
    setSessionName('Session');
  };

  useEffect(() => {
    if (blockLength === 0 && !onBreak) {
      console.log('Dingdingding, time for break');
      setOnBreak(true);
      setSessionName('Break');
      setBlockLength(breakLength * 60);
      console.log('going on break');
    } else if (blockLength === 0 && onBreak) {
      console.log('Dingdingding, time for session');
      setOnBreak(false);
      setSessionName('Session');
      setBlockLength(sessionLength * 60);
      console.log('going on session');
    }
  }, [blockLength]);

  return (
    <main>
      <h1>Pomodoro clock</h1>

      <div className='flexRow'>
        <BlockSettings
          name={'break'}
          length={breakLength}
          setLength={setBreakLength}
          setBlockLength={setBlockLength}
          sessionName={sessionName}
        />
        <BlockSettings
          name={'session'}
          length={sessionLength}
          setLength={setSessionLength}
          setBlockLength={setBlockLength}
          sessionName={sessionName}
        />
      </div>

      <section className='container flexColumn'>
        <BlockDisplay
          formatTime={formatTime}
          blockLength={blockLength}
          onBreak={onBreak}
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
              reset();
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

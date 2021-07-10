import React, { useState, useEffect } from 'react';
import BlockDisplay from './BlockDisplay';
import BlockSettings from './BlockSettings';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [blockLength, setBlockLength] = useState(25);
  // to be replaced by blockLength?
  const [minutes, setMinutes] = useState(25 * 60);
  const [seconds, setSeconds] = useState(3);

  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');

  // related to interval
  const [isRunning, setIsRunning] = useState(false);
  const [loop, setLoop] = useState();

  const formatTime = (length) => {
    const timeInSeconds = length * 60;
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

  // need something to swap sessionName from break to session when timer hits 0

  useEffect(() => {
    // do I need if statement for isRunning? if the useEffect watches for sessionName to change, it won't actually reset the blockLength until the timer hits 0...
    // if (!isRunning) {
    if (sessionName === 'Session') {
      setBlockLength(sessionLength);
    } else if (sessionName === 'Break') {
      setBlockLength(breakLength);
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

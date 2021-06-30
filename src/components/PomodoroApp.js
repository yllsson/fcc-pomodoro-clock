import React, { useState, useEffect } from 'react';
import Settings from './Settings';
import Session from './Session';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  let secondInterval;
  let minuteInterval;

  // handleStartStop should start or pause the timer
  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const decrementSeconds = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
    console.log('minutes are:', minutes, 'seconds are:', seconds, isRunning);
  };
  const decrementMinutes = () => {
    // setSeconds(59)
    setMinutes((prevMinutes) => prevMinutes - 1);
  };

  // tried to make it so this useEffect triggers the interval as soon as the handleStartStop flicks the "isRunning" on or off. But this still doesn't work so need other solution.
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(59);
    }

    if (isRunning) {
      console.log('clearing intervals');
      clearInterval(secondInterval);
      clearInterval(minuteInterval);
    } else {
      secondInterval = setInterval(decrementSeconds, 1000);
      minuteInterval = setInterval(decrementMinutes, 60000);
    }
  }, [isRunning]);

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
        <Session
          name={sessionName}
          seconds={seconds}
          handleStartStop={handleStartStop}
          isRunning={isRunning}
          minutes={minutes}
          secondInterval={secondInterval}
          minuteInterval={minuteInterval}
        />
      </section>
    </main>
  );
};

export default PomodoroApp;

import React, { useState, useEffect } from 'react';
import Settings from './Settings';
import Session from './Session';

const PomodoroApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [sessionName, setSessionName] = useState('Session');
  // const [sessionName, setSessionName] = useState('Break');

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  let secondInterval;
  let minuteInterval;

  // handleStartStop should start or pause the timer
  const handleStartStop = () => {
    // const now = new Date().toDateString;

    // this is all bs, why isn't this working??
    if (isRunning) {
      setIsRunning(false);
      console.log(minutes, 'seconds are:', seconds, isRunning);
      clearInterval(secondInterval);
    } else {
      setIsRunning(true);
      console.log(minutes, 'seconds are:', seconds, isRunning);
      secondInterval = setInterval(
        setSeconds((prevSeconds) => prevSeconds - 1),
        1000
      );
      minuteInterval = setInterval(
        setMinutes((prevMinutes) => prevMinutes - 1),
        60000
      );
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

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

  let interval;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  const getTime = (length) => {
    const date = new Date().getTime();
    const goalTime = date + length * minute;
    const gap = goalTime - date;
    const textMinutes = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);
    setMinutes(textMinutes);
    if (textSeconds < 10) {
      setSeconds(`0${textSeconds}`);
    } else {
      setSeconds(textSeconds);
    }
    console.log(date, goalTime, gap, textMinutes, textSeconds, isRunning);
  };

  // handleStartStop should start or pause the timer
  const handleStartStop = (length) => {
    getTime(length);

    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  // updates minutes if sessionLength is adjusted
  useEffect(() => {
    setMinutes(sessionLength);
  }, [sessionLength]);

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
        {sessionName === 'Session' ? (
          <Session
            name={sessionName}
            seconds={seconds}
            onClick={handleStartStop}
            isRunning={isRunning}
            minutes={sessionLength}
          />
        ) : (
          <Session
            name={sessionName}
            seconds={seconds}
            onClick={handleStartStop}
            isRunning={isRunning}
            minutes={breakLength}
          />
        )}
      </section>
    </main>
  );
};

export default PomodoroApp;

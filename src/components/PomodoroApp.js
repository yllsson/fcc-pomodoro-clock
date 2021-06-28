import React, { useState, useEffect } from 'react';
import Settings from './Settings';

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const date = new Date().getTime();
    const goalTime = date + sessionLength * minute;
    const gap = goalTime - date;

    const textMinutes = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);
    setMinutes(textMinutes);
    setSeconds(textSeconds);
    console.log(date, goalTime, gap, textMinutes, textSeconds);

    let interval;

    if (isRunning) {
      clearInterval(interval);
      setIsRunning(false);
    } else {
      setIsRunning(true);

      interval = setInterval(() => {
        setMinutes((prevMinutes) => {
          prevMinutes - 1;
        });
        setSeconds((prevSeconds) => {
          prevSeconds - 1;
        });

        console.log(textMinutes, textSeconds);
      }, 1000);
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
        <h2 id='timer-label'>Session</h2>

        <div id='time-left'>
          {minutes}:{seconds}
        </div>

        <div className='container flexRow'>
          <button id='start_stop' onClick={handleStartStop}>
            {'Start'}
          </button>
          <button id='reset'>Reset</button>
        </div>
      </section>
    </main>
  );
};

export default PomodoroApp;

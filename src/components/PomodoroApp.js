import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import BlockSettings from './BlockSettings';
import bipedibip from '../audio/bipedibip.mp3';

const PomodoroApp = () => {
  // Timer lengths
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [blockLength, setBlockLength] = useState(25 * 60);

  // Booleans
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  // Block name
  const [sessionName, setSessionName] = useState('Session');

  // audio file
  const [audio, setAudio] = useState();

  // Formatting the timer
  const formatTime = (length) => {
    const mins = Math.floor(length / 60);
    const secs = length % 60;
    return (
      (mins < 10 ? `0${mins}` : mins) + ':' + (secs < 10 ? `0${secs}` : secs)
    );
  };

  // Timer-related functions (runTimer, stopInterval, reset)
  const runTimer = () => {
    const second = 1000;
    let now = new Date().getTime();
    let then = new Date().getTime() + second;

    if (!isRunning) {
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
      stopAudio();
    }

    setIsRunning(!isRunning);
  };

  const stopInterval = () => {
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
    stopAudio();
  };

  // Audio-related functions (playAudio, stopAudio)
  const playAudio = () => {
    stopAudio();
    audio.play();
    setTimeout(stopAudio, 9000);
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  // State watchers/useEffects
  useEffect(() => {
    if (blockLength === 0 && !onBreak) {
      setOnBreak(true);
      setSessionName('Break');
      setBlockLength(breakLength * 60);
      playAudio();
    } else if (blockLength === 0 && onBreak) {
      setOnBreak(false);
      setSessionName('Session');
      setBlockLength(sessionLength * 60);
      playAudio();
    }
  }, [blockLength]);

  useEffect(() => {
    setAudio(document.getElementById('beep'));
  }, []);

  return (
    <main>
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
        <Timer
          blockLength={blockLength}
          formatTime={formatTime}
          onBreak={onBreak}
        />

        <div className='container flexRow timer-buttons'>
          <button className='timer-button' id='start_stop' onClick={runTimer}>
            {!isRunning ? 'Start' : 'Pause'}
          </button>
          <button className='timer-button' id='reset' onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <audio src={bipedibip} className='bipedibip' id='beep'></audio>
    </main>
  );
};

export default PomodoroApp;

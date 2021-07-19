import React from 'react';

const Timer = ({ blockLength, formatTime, onBreak }) => {
  return (
    <div className='container flexColumn timerContainer'>
      <h2 className='timer-label' id='timer-label'>
        {onBreak ? 'Break' : 'Session'}
      </h2>
      <p className='time-left' id='time-left'>
        {formatTime(blockLength)}
      </p>
    </div>
  );
};

export default Timer;

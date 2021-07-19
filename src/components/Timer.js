import React from 'react';

const Timer = ({ blockLength, formatTime, onBreak }) => {
  return (
    <div className='container flexColumn timerContainer'>
      <h2 className='timer-label' id='timer-label'>
        {onBreak ? 'Break' : 'Session'}
      </h2>
      <h2 className='time-left' id='time-left'>
        {formatTime(blockLength)}
      </h2>
    </div>
  );
};

export default Timer;

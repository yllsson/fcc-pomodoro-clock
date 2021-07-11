import React from 'react';

const BlockDisplay = ({ formatTime, blockLength, onBreak }) => {
  return (
    <div className='container flexColumn'>
      <h2 id='timer-label'>{onBreak ? 'Break' : 'Session'}</h2>
      <p id='time-left'>{formatTime(blockLength)}</p>
    </div>
  );
};

export default BlockDisplay;

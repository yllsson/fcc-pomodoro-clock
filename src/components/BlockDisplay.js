import React from 'react';

const BlockDisplay = ({ formatTime, blockLength, sessionName }) => {
  return (
    <div className='container flexColumn'>
      <h2 id='timer-label'>{sessionName}</h2>
      <p id='time-left'>{formatTime(blockLength)}</p>
    </div>
  );
};

export default BlockDisplay;

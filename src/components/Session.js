import React from 'react';

const Session = ({ name, minutes, seconds, onClick, isRunning }) => {
  return (
    <div id='time-left' className='container flexColumn'>
      <h2 id='timer-label'>{name}</h2>
      <p>
        {minutes}:{seconds}
      </p>

      <div className='container flexRow'>
        <button
          id='start_stop'
          onClick={() => {
            onClick(minutes);
          }}
        >
          {!isRunning ? 'Start' : 'Pause'}
        </button>
        <button id='reset'>Reset</button>
      </div>
    </div>
  );
};

export default Session;

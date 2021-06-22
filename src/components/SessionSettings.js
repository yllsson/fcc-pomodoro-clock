import React, { useState } from 'react';

const SessionSettings = () => {
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <section className='container flexColumn'>
      <h2 id='session-label'>Session Length</h2>

      <div className='container flexRow'>
        <button id='session-decrement'>-</button>
        <div className='sessionDisplay' id='session-length'>
          {sessionLength}
        </div>
        <button id='session-increment'>+</button>
      </div>
    </section>
  );
};

export default SessionSettings;

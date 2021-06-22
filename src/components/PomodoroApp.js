import React from 'react';

const PomodoroApp = () => {
  return (
    <main>
      <h1>Pomodoro clock</h1>
      <section className='breakContainer'>
        <h2 id='break-label'>Break Length</h2>
        <button id='break-decrement'>-</button>
        <div class='breakDisplay'>5</div>
        <button id='break-increment'>+</button>
      </section>

      <section className='sessionContainer'>
        <h2 id='session-label'>Session Length</h2>
        <button id='session-decrement'>-</button>
        <button id='session-increment'>+</button>
      </section>
    </main>
  );
};

export default PomodoroApp;

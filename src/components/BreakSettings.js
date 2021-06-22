import React, { useState } from 'react';

const BreakSettings = () => {
  const [breakLength, setBreakLength] = useState(5);

  return (
    <section className='container flexColumn'>
      <h2 id='break-label'>Break Length</h2>

      <div className='container flexRow'>
        <button id='break-decrement'>-</button>
        <div className='breakDisplay' id='break-length'>
          {breakLength}
        </div>
        <button id='break-increment'>+</button>
      </div>
    </section>
  );
};

export default BreakSettings;

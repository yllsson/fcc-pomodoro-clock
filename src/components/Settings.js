import React, { useState } from 'react';

const Settings = ({name, length}) => {
  return (
    <section className='container flexColumn'>
      <h2 id={`${name}-label`}>{name.charAt(0).toUpperCase() + name.slice(1)} Length</h2>

      <div className='container flexRow'>
        <button id={`${name}-decrement`}>-</button>
        <div className={`${name}Display`} id={`${name}-length`}>
          {length}
        </div>
        <button id={`${name}-increment`}>+</button>
      </div>
    </section>
  );
};

export default Settings;

import React from 'react';

const Settings = ({ name, length, setLength, formatTime }) => {
  const incrementLength = () => {
    setLength((prevLength) => prevLength + 1 * 60);
  };

  const decrementLength = () => {
    setLength((prevLength) => prevLength - 1 * 60);
  };

  return (
    <section className='container flexColumn'>
      <h2 id={`${name}-label`}>
        {name.charAt(0).toUpperCase() + name.slice(1)} Length
      </h2>

      <div className='container flexRow'>
        <button id={`${name}-decrement`} onClick={decrementLength}>
          -
        </button>

        <div className={`${name}Display`} id={`${name}-length`}>
          {formatTime(length)}
        </div>

        <button id={`${name}-increment`} onClick={incrementLength}>
          +
        </button>
      </div>
    </section>
  );
};

export default Settings;

import React from 'react';

const BlockSettings = ({
  name,
  length,
  setLength,
  setBlockLength,
  sessionName
}) => {
  const formatBlockLength = (length) => {
    const timeInSeconds = length * 60;
    const mins = timeInSeconds / 60;
    return mins;
  };
  const incrementLength = () => {
    if (length <= 59) {
      setLength((prevLength) => prevLength + 1);
      if (name === sessionName.toLowerCase()) {
        setBlockLength((prevLength) => prevLength + 60);
      }
    }
  };

  const decrementLength = () => {
    if (length >= 2) {
      setLength((prevLength) => prevLength - 1);
      if (name === sessionName.toLowerCase()) {
        setBlockLength((prevLength) => prevLength - 60);
      }
    }
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
          {formatBlockLength(length)}
        </div>

        <button id={`${name}-increment`} onClick={incrementLength}>
          +
        </button>
      </div>
    </section>
  );
};

export default BlockSettings;

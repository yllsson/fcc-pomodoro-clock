import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello world');

class App extends React.Component {
  render() {
    return <h1>Pomodoro clock</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

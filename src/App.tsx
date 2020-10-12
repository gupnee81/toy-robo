import React from 'react';
import { store } from './store';
import { IState } from './reducers';
import { validateCommand } from './helpers';
import { CONSTANTS } from './constants';
import * as action from './actions';
import './App.css';

const { PLACE, MOVE, LEFT, RIGHT, REPORT, CLEAR } = CONSTANTS;


const App: React.FC = () => {
  const [inputs, setInputs] = React.useState(['']);
  const [command, setCommand] = React.useState('');
  const state: IState = store.getState();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value.toUpperCase());
  };

  const dispatchCommand = () => {
    if (validateCommand(command)) {
      const [commandString, parameters] = command.split(' ');
      setInputs([...inputs, command]);
      setCommand('');

      if (commandString.includes(PLACE)) {
        const [xAxis, yAxis, facingDirection] = parameters.split(',');
        store.dispatch(action.place(Number(xAxis), Number(yAxis), facingDirection));
      } else if (commandString.includes(MOVE)) {
        store.dispatch(action.move());
      } else if (commandString.includes(LEFT)) {
        store.dispatch(action.faceLeft());
      } else if (commandString.includes(RIGHT)) {
        store.dispatch(action.faceRight());
      } else if (commandString.includes(REPORT)) {
        store.dispatch(action.report());
      } else if (commandString.includes(CLEAR)) {
        store.dispatch(action.clear());
        setInputs(['']); // resets the input to initial value
      }

    } else {
      window.alert('INCORRECT INPUT');
      setCommand('');
    }
  };

  const handleSubmitCommand = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatchCommand();
  };

  return (
    <div className='App'>
      <h1>Toy Robot Code Challenge</h1>
      <div className='container leftConatiner'>
        <h2>Commands</h2>
        <div>
          { inputs.map((input: string, index: number) => {
            if (input !== '') {
              return (<div key={index}>{input}</div>);
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className='container rightConatiner' aria-live='polite' aria-atomic='true' aria-relevant='additions removals'>
        <h2>Output</h2>
        {state.reported &&
          <div>
            {`${state.xAxis},${state.yAxis},${state.facingDirection}`}
          </div>
        }
      </div>
      <div>
        <form onSubmit={handleSubmitCommand} className='App-block__input-field'>
          <label htmlFor='inputCommand'>Type command here and hit Enter: </label>
          <input id='inputCommand' type='text' value={command} onChange={handleTextChange} name='name' className='inputCommandField' placeholder='Type command here and hit Enter' />
        </form>
      </div>
    </div>
  );
};

export default App;

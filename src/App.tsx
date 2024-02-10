import React from 'react';
import style from './App.module.css';
import { Counter } from './counter/Counter';
import { Setting } from './setting/Setting';

function App() {

  return (
    <div className={style.app}>
      <Setting />
      <Counter />
    </div>
  );
}

export default App;

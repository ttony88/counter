import React, { useState } from 'react';
import style from './App.module.css';
import { Counter } from './counter/Counter';
import { Setting } from './setting/Setting';
import { getFromLocalStoredgeValue } from './util/localStorege';

function App() {

  const maxValue = getFromLocalStoredgeValue("maxValue") || 5
  const minValue = getFromLocalStoredgeValue("minValue") || 1

  const [count, setCount] = useState(minValue)

  const [messageCount, setMessageCount] = useState('')

  const increment = () => {
      if(count < maxValue){
          setCount(count + 1)
      } 
  }
  
  const decriment = () => setCount(minValue)

  const disabledIncrement = count >= maxValue || !!messageCount

  const disabledDecrement = count <= minValue

  return (
    <div className={style.app}>
      <Setting setCount={setCount} 
              setMessageCount={setMessageCount}  />
      <Counter count={count} setCount={setCount} 
               messageCount={messageCount} 
               increment={increment} decriment={decriment}
               disabledIncrement={disabledIncrement}
               disabledDecrement={disabledDecrement} />
    </div>
  );
}

export default App;

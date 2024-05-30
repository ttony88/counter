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

  const isMaxCount = count >= maxValue

  const isMinCount = count <= minValue

  const disabledButtonIncrement = isMaxCount || !!messageCount

  const disabledButtonDecrement = isMinCount

  return (
    <div className={style.app}>
      <Setting setCount={setCount}
               messageCount={messageCount}
               setMessageCount={setMessageCount}  />
      <Counter count={count} setCount={setCount} 
               messageCount={messageCount}
               isMaxCount={isMaxCount} 
               increment={increment} decriment={decriment}
               disabledButtonIncrement={disabledButtonIncrement}
               disabledButtonDecrement={disabledButtonDecrement} />
    </div>
  );
}

export default App;

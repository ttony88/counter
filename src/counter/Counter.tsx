import React, {FC, useEffect, useState}  from 'react'
import style from './Counter.module.css'
import { Button } from '../components/button/Button'
import { getFromLocalStoredgeValue } from '../util/localStorege'



export const Counter:FC = () => {

    const maxValue = getFromLocalStoredgeValue("maxValue")
    const minValue = getFromLocalStoredgeValue("minValue")

    

    const [count, setCount] = useState(minValue)

    const increment = () => {
       if(count < maxValue){
           setCount(count + 1)
       } 
    }
    
    const decriment = () => setCount(0)

    const disabledIncrement = count >= maxValue

    const disabledDecrement = count <= minValue

    const styleDisplay = {
        color: disabledIncrement ? "red" : "rgb(146, 238, 41)"
    }

    return(
        <div className={style.counter}>
            <div className={style.display} style={styleDisplay}>
                {count}
            </div>
            <div className={style.buttons}>
                <Button title='inc' onClickHandler={increment} disabled={disabledIncrement}/>
                <Button title='reset' onClickHandler={decriment} disabled={disabledDecrement}/>
            </div>
        </div>
    )
}
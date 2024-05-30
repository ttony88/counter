import React, {Dispatch, FC}  from 'react'
import style from './Counter.module.css'
import { Button } from '../components/button/Button'

type CounterPropsType = {
    count: string
    messageCount: string
    setCount: Dispatch<any>
    increment: () => void
    decriment: () => void
    disabledButtonIncrement: boolean
    disabledButtonDecrement: boolean
    isMaxCount: boolean
}

export const Counter:FC<CounterPropsType> = (props) => {

    const styleDisplay = {
        color: props.messageCount === 'incorect value' || props.isMaxCount  ? 'red' : 'rgb(146, 238, 41)',
        fontSize: props.messageCount ? 16 : 70,
    }

    const valueCount = props.messageCount ? props.messageCount : props.count

    return(
        <div className={style.counter}>
            <div className={style.display} style={styleDisplay}>
                {valueCount}
            </div>
            <div className={style.buttons}>
                <Button title='inc' onClickHandler={props.increment} disabled={props.disabledButtonIncrement}/>
                <Button title='reset' onClickHandler={props.decriment} disabled={props.disabledButtonDecrement}/>
                {/* <Button title='set' onClickHandler={props.decriment} /> */}
            </div>
        </div>
    )
}
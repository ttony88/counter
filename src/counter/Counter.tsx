import React, {Dispatch, FC}  from 'react'
import style from './Counter.module.css'
import { Button } from '../components/button/Button'

type CounterPropsType = {
    count: string
    messageCount: string
    setCount: Dispatch<any>
    increment: () => void
    decriment: () => void
    disabledIncrement: boolean
    disabledDecrement: boolean
}

export const Counter:FC<CounterPropsType> = (props) => {

    const styleDisplay = {
        color: props.disabledIncrement ? 'red' : 'rgb(146, 238, 41)',
        fontSize: props.messageCount ? 16 : 70,
    }

    const valueCount = props.messageCount ? props.messageCount : props.count

    return(
        <div className={style.counter}>
            <div className={style.display} style={styleDisplay}>
                {valueCount}
            </div>
            <div className={style.buttons}>
                <Button title='inc' onClickHandler={props.increment} disabled={props.disabledIncrement}/>
                <Button title='reset' onClickHandler={props.decriment} disabled={props.disabledDecrement}/>
                <Button title='set' onClickHandler={props.decriment} />
            </div>
        </div>
    )
}
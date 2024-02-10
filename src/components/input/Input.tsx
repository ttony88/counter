import React, {ChangeEvent, FC}  from 'react'
import style from './Input.module.css'

type InputProps = {
    title: string
    value: number
    onChangeInput: (value: number) => void
}
export const Input:FC<InputProps> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {props.onChangeInput(+e.currentTarget.value)}

    return(
        <div className={style.wrapper}>
            <span className={style.title}>
                {props.title}
            </span>
            <input type='number' value={props.value} onChange={onChangeHandler}/>
        </div>
    )
}
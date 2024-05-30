import React, {ChangeEvent, Dispatch, FC, KeyboardEvent}  from 'react'
import style from './Input.module.css'

type InputProps = {
    title: string
    value: number
    warning?: boolean
    onChangeInput: (value: number, setValue: (value: number) => void) => void
    onFocusInput: () => void
    onKeyEnter: () => void
    setValue: Dispatch<any>
}
export const Input:FC<InputProps> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeInput(+e.currentTarget.value, props.setValue)}

    const onFocusHandler = () => {props.onFocusInput()} 

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            
            props.onKeyEnter()
        }
    }

    const inputBorderStyle = {
        borderColor: props.warning ? 'red' : 'rgb(146, 238, 41)',
        borderStyle: 'solid',
        borderWidth: '3px'
    }
    
    return(
        <div className={style.wrapper}>
            <span className={style.title}>
                {props.title}
            </span>
            <input type='number' 
                   style={inputBorderStyle}
                   value={props.value} 
                   onChange={onChangeHandler}
                   onFocus={onFocusHandler}
                   onKeyDown={onKeyDownHandler}
                   className={style.input}/>
        </div>
    )
}
import React, {FC}  from 'react'
import style from './Button.module.css'

type ButtonProps = {
    title: string
    onClickHandler: () => void
    disabled?: boolean
}
export const Button:FC<ButtonProps> = (props) => {

    return(
        <button onClick={props.onClickHandler} 
                className={style.button}
                disabled={props.disabled}>
            {props.title}
        </button>
    )
}
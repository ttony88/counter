import React, {Dispatch, FC, memo, useEffect, useState}  from 'react'
import style from './Setting.module.css'
import { Button } from '../components/button/Button'
import { Input } from '../components/input/Input'
import { getFromLocalStoredgeValue } from '../util/localStorege'
import useUpdateEffect from '../util/hooks'

type SettingProps = {
    messageCount: string
    setCount: Dispatch<any>
    setMessageCount: Dispatch<any>
}
export const Setting:FC<SettingProps> = memo((props) => {

    const minValueLS = getFromLocalStoredgeValue('minValue') || 1
    const maxValueLS = getFromLocalStoredgeValue('maxValue') || 5

    const [maxValue, setMaxValue] = useState(maxValueLS)

    const [minValue, setMinValue] = useState(minValueLS)

    const [disabled, setDisabled] = useState(true)

    const warningInputMaxValue = maxValue <= minValue
    const warningInputMinValue = minValue < 0 || warningInputMaxValue

    useUpdateEffect(() => {
        if(warningInputMinValue) {
            props.setMessageCount('incorect value')
            setDisabled(true) 
            
        } else {
            props.setMessageCount("enter value and press 'set'")
            setDisabled(false)
        }
               
    }, [minValue, maxValue])

    const onClickHandlerSet = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("minValue", JSON.stringify(minValue))
        setDisabled(true)
        props.setMessageCount('')
        props.setCount(minValue)
    }

    const onFocusHandler = () => {
        setDisabled(false)
    }

    const onChangeInput = (value: number, setValue: (value: number) => void) => {
        setValue(value)
    }
    
    return(
        <div className={style.setting}>
            <div className={style.display}>
                <Input title='max value' value={maxValue} 
                       warning={warningInputMaxValue}
                       onChangeInput={onChangeInput} 
                       onFocusInput={onFocusHandler}
                       onKeyEnter={onClickHandlerSet}
                       setValue={setMaxValue} />
                <Input title='start value' value={minValue} 
                       warning={warningInputMinValue}
                       onChangeInput={onChangeInput} 
                       onFocusInput={onFocusHandler}
                       onKeyEnter={onClickHandlerSet}
                       setValue={setMinValue} />
            </div>
            <div className={style.buttonArea}>
                <Button title='set' onClickHandler={onClickHandlerSet} disabled={disabled} />
            </div>
        </div>
    )
})

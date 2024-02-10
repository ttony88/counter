import React, {FC, useEffect, useState}  from 'react'
import style from './Setting.module.css'
import { Button } from '../components/button/Button'
import { Input } from '../components/input/Input'
import { getFromLocalStoredgeValue } from '../util/localStorege'

type SettingProps = {
}
export const Setting:FC<SettingProps> = (props) => {

    const [maxValue, setMaxValue] = useState(5)

    const [minValue, setMinValue] = useState(1)

    const onClickHandlerSet = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }

    useEffect(() => {
        setMaxValue(getFromLocalStoredgeValue("maxValue"))
        setMinValue(getFromLocalStoredgeValue("minValue"))
    }, [])

    return(
        <div className={style.setting}>
            <div className={style.display}>
                <Input title='max value' value={maxValue} onChangeInput={setMaxValue} />
                <Input title='start value' value={minValue} onChangeInput={setMinValue} />
            </div>
            <div className={style.buttons}>
                <Button title='set' onClickHandler={onClickHandlerSet} />
            </div>
        </div>
    )
}
import React, {ChangeEvent} from 'react';
import '../App.css';
import {useDispatch} from "react-redux";
import {
    setCurrencyOne,
    setCurrencyTwo,
    updateIsAccess,
    updateOneText,
    updateTwoText
} from "../Action&Thunk/Action_Thunk";
import NativeSelect from '@mui/material/NativeSelect';
import {Button, FormControl, InputLabel, MenuItem} from "@mui/material";
import s from "./Convector.module.css"

type ConvetorType = {
    isAccess: boolean,
    inputOneValue: string,
    inputTwoValue: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    options1: string[]
    options2: string[]
    currencyOne: string
    currencyTwo: string
    sell: string
    buy: string

}

function Convector(props: ConvetorType) {
    const dispatch = useDispatch()

    const mapSelect1 = props.options1.map((m, index) => <option key={index}>{m}</option>)
    const mapSelect2 = props.options2.map((m, index) => <option key={index}>{m}</option>)

    const onChangeSelect1 = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateTwoText(e.currentTarget.value))
        dispatch(setCurrencyOne(e.currentTarget.value))
    }
    const onChangeSelect2 = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateOneText(e.currentTarget.value))
        dispatch(setCurrencyTwo(e.currentTarget.value))
    }
    const onClickHandler = (val: boolean) => {
        dispatch(updateIsAccess(val))
    }
    let dis = !(props.currencyTwo && props.currencyOne)
    const styles = dis ? s.buttons_dis : s.buttons
    return (
        <div className={s.convector}>
            {props.isAccess
                ? <div>
                    <div className={s.box2}>
                        <div className={s.box1}>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        From
                                    </InputLabel>
                                    <NativeSelect className={s.selects} value={props.currencyOne}
                                                  onChange={onChangeSelect1}>
                                        <MenuItem> <em>None</em></MenuItem>
                                        {mapSelect1}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div>
                                <label>
                                    <input className={s.inputs} data-currency="currencyOne"
                                           onChange={props.onChangeHandler}
                                           value={props.inputOneValue}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={s.box1}>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        To
                                    </InputLabel>
                                    <NativeSelect className={s.selects} value={props.currencyTwo}
                                                  onChange={onChangeSelect2}>
                                        {mapSelect2}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div>
                                <label>
                                    <input className={s.inputs} onChange={props.onChangeHandler}
                                           value={props.inputTwoValue}
                                           data-currency="currencyTwo"
                                    />
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={s.down_box}>
                        <div>
                            <button disabled={dis}
                                    className={styles}
                                    onClick={() => {
                                        onClickHandler(false)
                                    }}>Swap</button>
                        </div>
                        <div>Currency rate: {props.buy}</div>
                    </div>
                </div>
                : <div>
                    <div className={s.box2}>
                        <div className={s.box1}>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        From
                                    </InputLabel>
                                    <NativeSelect className={s.selects} value={props.currencyTwo}
                                                  onChange={onChangeSelect2}>
                                        {mapSelect2}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div>
                                <label>
                                    <input className={s.inputs} onChange={props.onChangeHandler}
                                           value={props.inputTwoValue}
                                           data-currency="currencyTwo"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={s.box1}>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        To
                                    </InputLabel>
                                    <NativeSelect className={s.selects} value={props.currencyOne}
                                                  onChange={onChangeSelect1}>
                                        {mapSelect1}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div>
                                <label>
                                    <input className={s.inputs} onChange={props.onChangeHandler}
                                           value={props.inputOneValue}
                                           data-currency="currencyOne"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={s.down_box}>
                        <div>
                            <button disabled={dis}
                                    className={styles}
                                    onClick={() => {
                                        onClickHandler(true)
                                    }}>Swap</button>
                        </div>
                        <div className={s.down_box_1}>Currency rate: {props.sell}</div>
                    </div>
                </div>}
        </div>
    );
}

export default Convector;

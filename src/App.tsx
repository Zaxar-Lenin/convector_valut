import React, {useEffect} from 'react';
import './App.css';
import Convector from "./Convector/Convector";
import {useDispatch, useSelector} from "react-redux";
import {InitiolStateType} from "./Redux/convert-reduce";
import {StateType} from "./Redux/store";
import {getCurrency, setInputValue} from "./Action&Thunk/Action_Thunk";

function App() {
    const dispatch = useDispatch()

    const state = useSelector<StateType, InitiolStateType>(state => state.currencies)

    useEffect(() => {
        dispatch(getCurrency())
    }, [])

    let buy = "";
    let sell = "";

    state.currencyJson[state.currencyOne + "_" + state.currencyTwo] && (buy = state.currencyJson[state.currencyOne + "_" + state.currencyTwo].buy_price)
    state.currencyJson[state.currencyOne + "_" + state.currencyTwo] && (sell = state.currencyJson[state.currencyOne + "_" + state.currencyTwo].sell_price)

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let currencyRate
        state.isAccess ? (currencyRate = +buy) : (currencyRate = +sell)
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'currencyOne') {
                if (value === '') {
                    dispatch(setInputValue(value, value));
                } else {
                    dispatch(setInputValue(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(setInputValue(value, value));
                } else {
                    dispatch(setInputValue((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };

    return (
        <div className="App">
            <Convector
                buy={buy}
                sell={sell}
                currencyOne={state.currencyOne}
                currencyTwo={state.currencyTwo}
                options1={state.arrayOneText}
                options2={state.arrayTwoText}
                inputOneValue={state.inputOneValue}
                inputTwoValue={state.inputTwoValue}
                isAccess={state.isAccess}
                onChangeHandler={changeCurrencyField}/>
        </div>
    );
}

export default App;

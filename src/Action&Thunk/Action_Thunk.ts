import {Dispatch} from "redux";
import {Api} from "../Api/Api";
import {currencyJsonType} from "../Redux/convert-reduce";


//action-creator
export const setCurrencyState = (data: currencyJsonType) => {
    return {
        type: "SET-CURRENCY",
        data,
    } as const
}
export const updateOneText = (currency: string) => {
    return {
        type: "FILTER-ONE-TEXT",
        currency,
    } as const
}
export const updateTwoText = (currency: string) => {
    return {
        type: "FILTER-TWO-TEXT",
        currency,
    } as const
}
export const setCurrencyOne = (currency: string) => {
    return {
        type: "SET-CURRENCY-ONE",
        currency,
    } as const
}
export const setCurrencyTwo = (currency: string) => {
    return {
        type: "SET-CURRENCY-TWO",
        currency,
    } as const
}
export const updateIsAccess = (value: boolean) => {
    return {
        type: "UPDATE-IS-ACCESS",
        value,
    } as const
}
export const setInputValue = (inputOneValue: string, inputTwoValue: string) => {
    return {
        type: "SET-INPUT-VALUE",
        payload: {
            inputOneValue,
            inputTwoValue,
        },
    } as const
}

//Types
export type SetCurrencyStateType = ReturnType<typeof setCurrencyState>
export type UpdateOneTextType = ReturnType<typeof updateOneText>
export type UpdateTwoTextType = ReturnType<typeof updateTwoText>
export type SetCarrancyOneType = ReturnType<typeof setCurrencyOne>
export type SetCarrancyTwoType = ReturnType<typeof setCurrencyTwo>
export type UpdateIsAccessType = ReturnType<typeof updateIsAccess>
export type SetInputValueType = ReturnType<typeof setInputValue>

//thunk-creator
export const getCurrency = () => (dispatch: Dispatch) => {
    Api.getCurrencyLayer().then(data => {
        dispatch(setCurrencyState(data))
    })
}

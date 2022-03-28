import {functionsFilter} from "../secondaryFunctions/secondaryFunctions";
import {
    SetCarrancyOneType,
    SetCarrancyTwoType,
    SetCurrencyStateType,
    SetInputValueType,
    UpdateIsAccessType,
    UpdateOneTextType,
    UpdateTwoTextType
} from "../Action&Thunk/Action_Thunk";

export type currencyJsonType = {
    [key: string]: {
        buy_price: string,
        sell_price: string,
        last_trade: string,
        high: string,
        low: string,
        avg: string,
        vol: string,
        vol_curr: string,
        updated: number
    }
}


const initiolState = {
    currencyJson: {} as currencyJsonType,
    currencyOne: "",
    currencyTwo: "",
    isAccess: true,
    inputOneValue: "",
    inputTwoValue: "",
    arrayCurrency: [] as string[][],
    arrayOneText: [""] as string[],
    arrayTwoText: [""] as string[],
}


type ActionType = SetCurrencyStateType
    | UpdateOneTextType
    | UpdateTwoTextType
    | SetCarrancyOneType
    | SetCarrancyTwoType
    | UpdateIsAccessType
    | SetInputValueType

export type InitiolStateType = typeof initiolState

export const ConvertReduce = (state: InitiolStateType = initiolState, action: ActionType): InitiolStateType => {
    switch (action.type) {
        case "SET-INPUT-VALUE":
            return {
                ...state,
                ...action.payload
            }
        case "UPDATE-IS-ACCESS":
            return {
                ...state,
                isAccess: action.value,
                //clean inputs when changing dependencies
                inputOneValue: "",
                inputTwoValue: "",
            }
        case "SET-CURRENCY-ONE":
            return {
                ...state,
                currencyOne: action.currency,
                //clean inputs when changing dependencies
                inputOneValue: "",
                inputTwoValue: "",
            }
        case "SET-CURRENCY-TWO":
            return {
                ...state,
                currencyTwo: action.currency,
                //clean inputs when changing dependencies
                inputOneValue: "",
                inputTwoValue: "",
            }
        case "FILTER-ONE-TEXT":
            return {
                ...state,
                arrayOneText: ["",...state.arrayCurrency.filter(f => f[1] === action.currency ).map(m => m[0])]
            }
        case "FILTER-TWO-TEXT":
            return {
                ...state,
                arrayTwoText: ["",...state.arrayCurrency.filter(f => f[0] === action.currency).map(m => m[1])]
            }
        case "SET-CURRENCY":
            return {
                ...state,
                currencyJson: {...action.data},
                arrayCurrency: Object.keys(action.data).map(m => m.split("_")),
                arrayOneText: [...state.arrayOneText,...functionsFilter(action.data, 0)],
                arrayTwoText: [...state.arrayTwoText,...functionsFilter(action.data, 1)],

            }
        default:
            return state
    }
}




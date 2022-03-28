import {currencyJsonType} from "../Redux/convert-reduce";

export function functionsFilter (j: currencyJsonType,n: number){
    let value = Object.keys(j).map(m => m.split("_"))
    return value.map(m => m[n]).filter((item, pos) => value.map(m => m[n]).indexOf(item) == pos)
}
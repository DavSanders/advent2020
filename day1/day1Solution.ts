import { accounts } from "./day1data";

function get2020numbers(array:number[],desiredTotal:number):number[]|number{
    for (let i=0; i < array.length; i++) {
        const remainder = desiredTotal - array[i]
        if (array.indexOf(remainder)!=-1){
            const answer = remainder * array[i]
            console.log([remainder, array[i], answer])
            return [remainder, array[i]]
        }
    }
    return -1
}

function getThree2020numbers(array:number[]){
    for (let i=0; i < array.length; i++) {
        const firstRemainder = 2020 - array[i]
        const other2 = get2020numbers(accounts,firstRemainder)
        if (other2!=-1){
            const answer = array[i] * other2[0] * other2[1]
            console.log(answer)
            break
        }
    }
}

getThree2020numbers(accounts)
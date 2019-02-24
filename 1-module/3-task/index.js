'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    const numbers = getNumbers( str )
    if ( numbers.length === 0 ){
        console.log('в строке нет чисел')
        return false
    }

    let min = numbers[ 0 ];
    let max = numbers[ 0 ]

    for (let i = 1; i < numbers.length; i++ ){
        if ( min > numbers[ i ] ) {
            min = numbers[ i ]
        }
        if ( max < numbers[ i ] ) {
            max = numbers[ i ]
        }
    }
    return {'min':min , 'max':max}

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function getNumbers( str) {
    const newStr = str.replace(/,/g,' ')
    const strInArray =  newStr.split(' ')
    const numbers = []

    for ( const el of strInArray )
    {
        if ( isNumeric( parseFloat( el ) )){
            numbers.push(parseFloat( el ))
        }

    }
 return numbers

}

var inputData = '25,-1,-234,4,   1000';

console.log( getMinMax(inputData) )
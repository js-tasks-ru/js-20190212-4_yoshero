/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
"use strict";

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function isNatural(num) {

    return ( ( (num ^ 0) === num ) && ( num > 0 ));
}

function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

alert('программа возводит x в степень n')
const x = parseInt(prompt('введите число x:', 1 ))

if ( !isNumeric(x) ) {
    alert('Введено не число')

} else {
    const n  = parseInt(prompt('введите степень числа n', 1 ))
    if ( !isNumeric(n) ) {
        alert('n должно быть числом')

    }
    else {
        if ( isNatural( n ) ){
            alert(pow(x,n))
        }else {
            alert('n должно быть натуральным числом')
        }

    }
}



/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
'use strict'

function find( obj, value ) {

    const array = []


    for ( const key in obj ) {

        if ( obj[ key ] !== null && typeof ( obj[ key ] ) === 'object' ) {
            const x = find( obj[ key ], value )
            if ( x !== null ) {
                array.push( key )
                array[ array.length - 1 ] = `${ array[ array.length - 1 ] }.${ x }`
            }

        } else {

            if ( obj[ key ] === value ) {
                array.push( key )
            }

        }
    }

    if ( array.length !== 0 ) {
        return ( array.length === 1 ) ? array[ 0 ] : array
    } else {
        return null
    }

}

let object = {
    options: {
        color: 'red'
    },
    style: {
        border: {
            color: 'red'
        }
    }
}



console.log( find( object, 'rаd' ) === null )

'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
let log = []

function makeLogging(fn, log) {

    return function () {
        let arr=[]
        for ( let i = 0; i < arguments.length; i++ ){
            arr.push(arguments[i])
        }
        log.push(arr)
        return fn.apply(this, arguments)

    }

}

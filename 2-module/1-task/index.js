/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone( obj ) {

    const newObj = {}
    for ( const key in obj ) {
        // console.log( typeof ( obj[ key ] ) )
        if ( obj[ key ] !== null && typeof ( obj[ key ] )  === 'object' ) {
            newObj[ key ] = clone( obj[ key ] )
        } else {
            newObj[ key ] = obj[ key ]
        }

    }
    return newObj
}


let obj = { test: { test2: { test3: null } } }

console.log( clone( obj ) !== obj )
console.log( clone( obj ).test.test2 !== obj.test.test2 )
console.log( clone( obj ).test.test2.test3 === obj.test.test2.test3 )
/*

it("проверяем вложенных объектов", function() {
    let obj = {test: { test2: { test3: '1' } }};

    expect(clone(obj) !== obj).toEqual(true);
    expect(clone(obj).test.test2 !== obj.test.test2).toEqual(true);
    expect(clone(obj).test.test2.test3 === obj.test.test2.test3).toEqual(true);
});

it("проверяем корректную обработку null (typeof null === 'object')", function() {
    let obj = {test: { test2: { test3: null } }};

    expect(clone(obj) !== obj).toEqual(true);
    expect(clone(obj).test.test2 !== obj.test.test2).toEqual(true);
    expect(clone(obj).test.test2.test3 === obj.test.test2.test3).toEqual(true);
});
console.log(newObj)*/


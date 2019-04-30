/**
 * processGenerator
 * @param {Generator} gen - генератор
 * @returns {Promise}
 */
function processGenerator(generator) {
    return new Promise(resolve => {
        function next(val) {

            let result  = generator.next(val);
            console.log(result)
            if (!result.done) {
                result.value.then(
                    result => {
                        next( result)

                    },
                    err => generator.throw(err)
                );
            } else {
                resolve(result.value)
                return
            }

        }
        next()
    })



}



function request(url) {

    return new Promise(resolve => {
        setTimeout(() => resolve('done-' + url));
    });

}

function * asyncFunction () {
    let user = yield request('hello');
    let profile = yield request('world');
        console.log(user)
    return user + ':' + profile;
}

let gen = asyncFunction()
processGenerator(gen).then( data => console.log("data", data))


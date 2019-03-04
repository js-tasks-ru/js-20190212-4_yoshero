let calendar = {
    from: new Date("2018-01-01T15:09:10Z"),
    to: new Date("2018-02-01T10:09:10Z")
};


calendar[Symbol.iterator] = function () {

    let current = this.from;

    let last = this.to;
    let val;
    let i;
    return {
        next() {

            if ( current <= last ) {

                 i = current.toLocaleString("ru", { day : '2-digit' }  )

                if (current.getDay() !== 0 && current.getDay() !== 6)
                {
                 val =  `${i}`
                } else {
                    val = `[${i}]`
                }

                current.setDate( current.getDate()  + 1 )

                return {
                    done: false,
                    value: val

                };
            } else {
                return {
                    done: true
                };
            }


        }

    }
};


for (let day of calendar) {
    console.log('day', day); // 1, затем 2, 3, 4, 5
}

console.log([...calendar])


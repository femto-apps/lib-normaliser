const { normalise } = require('../index.js')

const normaliser = {
    type: type => {
        if (!Number.isInteger(type)) {
            return [['Data is not an integer']]
        }

        return [null, type]
    }, 
    value: value => {
        if (value < 10) {
            return [['Data must be at least 10']]
        }

        return [null, value]
    }
}

{
    const { type, value, error } = normalise(normaliser, { type: 'string1', value: 'string2' })
    console.log(type, value, error)
}

{
    const { type, value, error } = normalise(normaliser, { type: 3.45, value: 3.45 })
    console.log(type, value, error)
}

{
    const { type, value, error } = normalise(normaliser, { type: 3.45, value: 33.45 })
    console.log(type, value, error)
}

{
    const { type, value, error } = normalise(normaliser, { type: 5, value: 5 })
    console.log(type, value, error)
}

{
    const { type, value, error } = normalise(normaliser, { type: 22, value: 22 })
    console.log(type, value, error)
}

/*
Outputs: 

undefined 'string2' { type: [ 'Data is not an integer' ] }
undefined undefined { type: [ 'Data is not an integer' ], value: [ 'Data must be at least 10' ] }
undefined 33.45 { type: [ 'Data is not an integer' ] }
5 undefined { value: [ 'Data must be at least 10' ] }
22 22 undefined
*/


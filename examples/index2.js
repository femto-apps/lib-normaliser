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
    // error: { name: ['Name too short'] } 
    // name: undefined
}

{
    const { type, value, error } = normalise(normaliser, { type: 3.45, value: 3.45 })
    console.log(type, value, error)
    // error: undefined
    // name: A_very_good_user
}

{
    const { type, value, error } = normalise(normaliser, { type: 3.45, value: 33.45 })
    console.log(type, value, error)
    // error: undefined
    // name: A_very_good_user
}

{
    const { type, value, error } = normalise(normaliser, { type: 5, value: 5 })
    console.log(type, value, error)
    // error: undefined
    // name: A_very_good_user
}

{
    const { type, value, error } = normalise(normaliser, { type: 22, value: 22 })
    console.log(type, value, error)
    // error: undefined
    // name: A_very_good_user
}

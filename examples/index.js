const { normalise } = require('../index.js')

const normaliser = {
    name: name => {
        if (name.length < 10) {
            return [['Name too short']]
        }

        return [null, name.toUpperCase()]
    }
}

{
    const { name, error } = normalise(normaliser, { name: 'bad_user' })
    console.log(name, error)
    // error: ['Name too short']
    // name: undefined
}

{
    const { name, error } = normalise(normaliser, { name: 'a_very_good_user' })
    console.log(name, error)
    // error: undefined
    // name: A_very_good_user
}
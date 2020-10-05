const _ = require('lodash')

function normalise(template, object) {
    const results = {}

    for (let index of Object.keys(template)) {
        const [error, result] = template[index](object[index])

        if (error) {
            _.set(results, `error.${index}`, error)
        } else {
            results[index] = result
        }
    }

    return results
}

module.exports = {
    normalise
}

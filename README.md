## lib-normaliser

> A simple normalisation library, intended to transform user generated results with possible errors.

### Usage

```javascript
const { normalise } = require('@femto-apps/normaliser')

const normaliser = {
    name: name => {
        if (name.length < 10) {
            return [['Name too short']]
        }
        
        return [null, name.toTitleCase()]
    }
}

{
    const { name, error } = normalise(normaliser, { name: 'bad_user' })
    // error: { name: ['Name too short'] } 
    // name: undefined
}

{
    const { name, error } = normalise(normaliser, { name: 'a_very_good_user' })
    // error: undefined
    // name: A_very_good_user
}
```

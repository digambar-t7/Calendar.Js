const jwt = require('jsonwebtoken')

// secret string for jwt
const jwtSecret = 'shhhhhhh'

const FetchUser = (req, res, next) => {
    let success = false
    // trying to get token stored in request's header
    const token = req.header('auth-token')

    // if token not found
    if (!token) {
        res
            .status(401)
            .send({ success, error: 'Please authenticate yourself' })
    }

    try {
        // getting data linked with this token
        const jwtData = jwt.verify(token, jwtSecret)

        // appending user details in the request itself 
        req.user = jwtData.user

        // calling the next function
        next()
    } catch (e) {
        res.status(401).send({ success, error: e })
    }

}

module.exports = FetchUser
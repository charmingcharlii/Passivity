const jwt = require('jsonwebtoken');

const secret = 'shhhsosecret'

module.exports = {
    authMiddleware: function ({req}) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim()
        }

        if(!token){
            return req
        }

        try {
            // i think this is where the user info is meant to be attatched, so why is it not coming thru context?
            const { data } = jwt.verify(token, secret, {})
            req.user = data
        }
        catch (err) {
            console.error(err)
            console.log('invalid token')
        }

        return req
    },
    signToken: function({ username, _id }){
        const payload = { username, _id }

        return jwt.sign({ data: payload }, secret, {})
    }
}
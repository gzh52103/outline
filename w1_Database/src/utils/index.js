const jwt = require('jsonwebtoken')

function formatData({
    code = 200,
    data = [],
    msg = 'success'
} = {}) {
    // const { code = 200, data = [], msg = 'success' }=obj

    if (code === 400 && msg === 'success') {
        msg = 'fail'
    }

    return {
        code,
        data,
        msg
    }
}

const privateKey = 'laoxie';
const token = {
    create(data, expiresIn = 60 * 60 * 2) {
        return jwt.sign(data, privateKey, { expiresIn })
    },
    verify(token) {
        let result;
        try {
            var decoded = jwt.verify(token, privateKey);
            console.log('decode=',decoded);
            result = true;
        } catch (err) {
            console.log('err=',err);
            result = false;
        }

        return result;
    }
}

module.exports = {
    formatData,
    token
}
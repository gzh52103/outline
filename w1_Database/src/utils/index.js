function formatData({
    code = 200,
    data = [],
    msg = 'success'
} = {}) {
    // const { code = 200, data = [], msg = 'success' }=obj

    if(code === 400 && msg === 'success'){
        msg = 'fail'
    }

    return {
        code,
        data,
        msg
    }
}

module.exports = {
    formatData
}
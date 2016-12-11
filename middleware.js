var middleware = {
    logger: function (req, res, next) {
        // new Date().toString()
        console.log('Request : ' + new Date().toString() + ' ' + req.method + ' ' +req.originalUrl);
        next();
    }
}

module.exports = middleware;
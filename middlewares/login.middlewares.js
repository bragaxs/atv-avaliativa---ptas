function loggingMiddleware(req, res, next) {
    const { method, url } = req;
    const now = new Date().toISOString();
    console.log(`[${now}] ${method} ${url}`);
    next();
}

module.exports = loggingMiddleware;

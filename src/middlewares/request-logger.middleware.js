function requestLoggerMiddleware(req, res, next) {
  console.log(`${req.method}:${req.originalUri}`);
  return next();
}

module.exports = requestLoggerMiddleware;

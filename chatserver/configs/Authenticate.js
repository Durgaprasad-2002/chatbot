const jwt = require("jsonwebtoken");

function Authenticate(req, res, next) {
  const token = req.headers.authorization || req.body.token;

  if (!token) {
    return res.status(403).json({
      message: "Please Login to Access Features",
      err: "Token Not Found",
    });
  }

  jwt.verify(token, "Durga@4c3", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

module.exports = { Authenticate };

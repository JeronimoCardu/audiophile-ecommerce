const crypto = require("crypto");

function cookieMiddleware(req, res, next) {
  if (!req.signedCookies.user || !req.signedCookies.user) {
    const userId = crypto.randomUUID();

    res.cookie("user", userId, {
      httpOnly: true,
      signed: true,
      sameSite: "none",
      secure: true,
    });
  }
  next();
}

module.exports = cookieMiddleware;

const crypto = require("crypto");

function cookieMiddleware(req, res, next) {
  if (!req.cookies || !req.cookies.user) {
    const userId = crypto.randomUUID();

    res.cookie("user", userId, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });
  }
  next();
}

module.exports = cookieMiddleware;

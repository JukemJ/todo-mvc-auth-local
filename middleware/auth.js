module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {          //check if user is authenticated every time a request is made
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  
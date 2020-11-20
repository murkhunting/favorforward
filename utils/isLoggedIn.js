function isLoggedIn (req, res, next) {
    if (req.session.currentUser) {
      console.log('Current user is logged in. We are GOOD TO GO');
      next();
    } else {
      res.redirect('/auth/login')
    }
}
  
  module.exports = isLoggedIn;
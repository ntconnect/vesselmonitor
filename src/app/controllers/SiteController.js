class SiteController {
  //Get /maps
  index(req, res) {
    res.render('home');
  }
}

module.exports = new SiteController();

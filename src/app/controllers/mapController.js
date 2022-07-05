class mapsController {
  //Get /maps
  index(req, res) {
    res.render('maps');
  }
}

module.exports = new mapsController();

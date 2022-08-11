const path = require('path');
exports.vaxVis = async function (req, res) {
    var data = req;
    res.sendFile(path.join(__dirname,'../views/vaxvis.html'));
  };
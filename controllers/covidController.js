const path = require('path');
exports.covidVis = async function (req, res) {

    // console.log('Recieved GET Broker HOS query with data ', data);
    res.sendFile(path.join(__dirname,'../views/covidvis.html'));
  };
exports.homeVis = async function (req, res) {

    // console.log('Recieved GET Broker HOS query with data ', data);
    res.sendFile(path.join(__dirname,'../views/home.html'));
};
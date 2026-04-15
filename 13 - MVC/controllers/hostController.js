const Home = require("../models/home")

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb'});
};


exports.getHostHome = (req, res, next) => {
  console.log("getHostHome called");
  Home.fetchAll((registeredHomes) => {
    console.log("Fetched homes:", registeredHomes);
    res.render('host/host-homelist', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  });
};


exports.postAddHome = (req, res, next) => {
  console.log("POST request received at /host/add-home");
  console.log("Form data:", req.body);
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render('host/home-added', {pageTitle: 'Home Added Successfully'});
};




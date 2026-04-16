const Home = require("../models/home")

exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {pageTitle: 'Add Home to airbnb', editing:false});
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing;
  Home.findById(homeId, home => {
    if(!home){
      console.log("Home not found");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId, editing, home);
    res.render('host/edit-home', {home:home,pageTitle: 'Edit Your home', editing:editing});
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

exports.getHostHome = (req, res, next) => {
  console.log("getHostHome called");
  Home.fetchAll((registeredHomes) => {
    console.log("Fetched homes:", registeredHomes);
    res.render('host/host-homelist', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  });
};

exports.postEditHome = (req, res, next) => {
  console.log("POST request received at /host/add-home");
  console.log("Form data:", req.body);
  const {id, houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();

  res.redirect("/host/host-homelist");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete", homeId);
  Home.deleteById(homeId, (error) => {
    if(error){
      console.log("Error while deleting:", error);
      return res.redirect("/host/host-homelist");
    }
    console.log("Home deleted successfully");
    res.redirect("/host/host-homelist");
  });
};


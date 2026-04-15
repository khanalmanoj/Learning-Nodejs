const Home = require("../models/home")

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'})
  );
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render('store/bookings', {registeredHomes: registeredHomes, pageTitle: 'Bookings'})
  );
};

exports.getFavouritesList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render('store/favourite-list', {registeredHomes: registeredHomes, pageTitle: 'Bookings'})
  );
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'Bookings'})
  );
};
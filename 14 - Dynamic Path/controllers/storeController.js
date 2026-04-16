const Home = require("../models/home")
const Favourite = require("../models/favourite")

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
  Favourite.getFavourites(favourites => {
      Home.fetchAll((registeredHomes) =>{
      const favouriteHomes = registeredHomes.filter(home =>
        favourites.includes(home.id));
      res.render('store/favourite-list', {favouriteHomes: favouriteHomes, pageTitle: 'Bookings'})
  });
  })
};

exports.postAddToFavourites = (req, res, next) => {
  console.log("Came to add to favourites", req.body);
  Favourite.addToFavourite(req.body.id, error => {
    if(error){
      console.log("Error while marking favourites");
    }
    res.redirect("/favourite-list");
  })
}

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
   res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'Bookings'})
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details page", homeId);
  Home.fetchAll((registeredHomes) => {
    const home = registeredHomes.find(h => h.id === homeId);
    console.log("Home Details", home);
    if (!home) {
      console.log("Home Not Found");
      res.redirect("/homes");
    } else {
      res.render('store/home-detail', {home: home, pageTitle: 'Home Detail'});
    }
  });
};
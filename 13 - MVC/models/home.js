const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

// //Load existing homes from file or start with empty array
// try {
//     if (fs.existsSync(homeDataPath)) {
//         const data = fs.readFileSync(homeDataPath, 'utf8');
//         registeredHomes = data ? JSON.parse(data) : [];
//     }
// } catch (error) {
//     console.log("Error reading homes file:", error);
// }

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save() {
        Home.fetchAll((registeredHomes) =>{
            registeredHomes.push(this);
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
            console.log("File Writing Concluded - Data saved:", error);
        }); 
        }
    )
       
    }

    static fetchAll(callback){
        fs.readFile(homeDataPath, (err, data) => {
            console.log("File read: ",err,data);
            callback(!err ? JSON.parse(data) : []);
        });
    }
}
var profile = require("./profile");
var users = process.argv.slice(2);
users.forEach(profile.get);
// var users = ["chalkers", "joykesten2", "reynadeloge"];
//
// users.forEach(profile.get);

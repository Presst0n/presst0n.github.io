const fs = require("fs");
const path = require("path");


const { saveData } = require('./myModule');


let test = saveData(path.join(__dirname, "2-read-write-users.json"), "545", false);

// console.log(test);




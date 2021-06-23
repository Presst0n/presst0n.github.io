const fs = require("fs");
const path = require("path");

function saveData(filePathToRead, folderNameForYourFiles, override = false) {

    let folderExists = fs.existsSync(path.join(__dirname, folderNameForYourFiles));

    let isOverridden = true;
    
    if (!folderExists) {
        createDirectory(folderNameForYourFiles);
        isOverridden = false
    }

    if (!override) {
        console.log('Given data already exists.');
        return;
    }

    fs.readFile(filePathToRead, function(err, jsonString) {
        if (err) {
            console.log(err);
        } else {
            let data = JSON.parse(jsonString);

            data.forEach(function(c) {
                let outcome = parseName(c.name);  
                let user = 
                `Name: ${outcome.fName}\n` + 
                `Surname: ${outcome.lName}\n` +
                `Street: ${c.address.street}\n` +
                `Zip-code: ${c.address.zipcode}\n` +
                `City: ${c.address.city}\n` +
                `Phone: ${c.phone}`;
                
                fs.writeFile(path.join(__dirname, folderNameForYourFiles,`${c.id}-${c.username}-${c.name}.txt`), user, function(err) {
                    if (err) {
                        isSuccessful = false;
                        console.log(err.message);
                    } 
                })
            });

            if (isOverridden === true) {
                console.log('Files has been overridden successfully.');
            } else {
                console.log('Files has been created successfully.');
            }
            console.log('Task completed.');
        }
    });
}

function createDirectory(folderName) {
    fs.mkdir(path.join(__dirname, folderName), function(err) {
        if(err) {
            isSuccessful = false;
            console.log(err);
        } else {
            console.log('Folder has been created succesfully.');
        }
    }); 
}

function parseName(input) {
    var fullName = input || "";
    var result = {};

    if (fullName.length > 0) {
        result.fName = fullName.split(' ').slice(0, -1).join(' ');
        result.lName = fullName.split(' ').slice(-1).join(' ');
    }
    return result;
}

module.exports = {
    saveData
}
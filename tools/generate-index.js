/* eslint-disable */
require('dotenv').config()
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const red = "\x1b[31m";
const cyan = "\x1b[36m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

console.log(`${cyan}==========================================================================`);
console.log(` Récupération du template depuis ${process.env.ENV_MOCK_CIBLE}`);
console.log(`==========================================================================${reset}`);

axios({
    method: "get",
    baseURL: process.env.ENV_MOCK_CIBLE,
    url: process.env.URL_TEMPLATE_CIBLE,
    responseType: "document"
})
    .then(function (response) {
        const templatePath = path.resolve(__dirname, '../', 'public/index.html');
        fs.writeFile(
            templatePath,
            response.data,
            function (err) {
                if (err) throw err;
                console.log(`${green}Récupération terminé avec succès : ${templatePath}${reset}`);
            }
        );
    })
    .catch(function (error) {
        console.log(`%sError : ${error.message}`, red);
    });

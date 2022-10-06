const google = require("googleapis").google

// const {client_email,private_key} = require("../propane-forge-364208-42dee2a24.json") 

//authenticate
const auth = new google.auth.JWT({
    email: process.env.EMAIL,
    key: process.env.KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const sheet = google.sheets("v4");

module.exports = {
    auth,
    sheet
}
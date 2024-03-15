const mysql = require('mysql');


// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'slashhash'
})

db.connect( (err) => {
    if (err) console.log("Error connecting: " + err);
    else console.log("Connection to DB");
})


module.exports = {
    db,
}

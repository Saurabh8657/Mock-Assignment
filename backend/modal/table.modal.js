const mysql = require('mysql');
const { db } = require('../config/db');

const createTable = (req, res, next) => {
    const query = `CREATE TABLE IF NOT EXISTS reciepes (
        idMeal VARCHAR(255) NOT NULL,
        strMealThumb VARCHAR(255) NOT NULL,
        strMeal VARCHAR(255) NOT NULL,
        strCategory VARCHAR(255) NOT NULL,
        strArea VARCHAR(255) NOT NULL
    )`
    db.query( query, [], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: err});
        } else {
            console.log("Table created");
            next() ;
        }
    })
}



module.exports = {
    createTable,
}

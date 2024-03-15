const express = require('express')
const { db } = require('../config/db')

const reciepeRouter = express.Router()

//--- reciepe routes ---//
//--- get all reciepes ---//
reciepeRouter.get("/", (req, res) => {
    try {
        const query = `SELECT * FROM reciepes`
        db.query(query, [], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//--- get single reciepe ---//
reciepeRouter.get("/:idMeal", (req, res) => {
    const idMeal = req.params.idMeal
    try {
        const query = `SELECT * FROM reciepes WHERE idMeal = ?`
        db.query(query, [idMeal], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})
//--- add reciepes ---//
reciepeRouter.post("/", (req, res) => {
    const { idMeal, strMealThumb, strMeal, strCategory, strArea } = req.body ;
    try {
        const query = `INSERT INTO reciepes (idMeal, strMealThumb, strMeal, strCategory, strArea) VALUES (?,?,?,?,?)`
        db.query(query, [idMeal, strMealThumb, strMeal, strCategory, strArea], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({Message:"Reciepe Added to Database",data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})


//--- delete reciepes ---//
reciepeRouter.delete("/:idMeal", (req, res) => {
    const { idMeal } = req.params ;
    try {
        const query = `DELETE FROM reciepes WHERE idMeal = ?`
        db.query(query, [idMeal], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({Message:"Reciepe Deleted",data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})

module.exports = {
    reciepeRouter,
}

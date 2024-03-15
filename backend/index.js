const express = require('express');
const cors = require('cors');
const { createTable } = require('./modal/table.modal');
const { reciepeRouter } = require('./routes/reciepe.router');
const PORT = 8080 ;

//--- server config ---//
const app = express();

app.use(express.json()) ;
app.use(express.text()) ;
app.use(cors()) ;

app.use('/reciepes', createTable, reciepeRouter)

app.get("/", (req, res) => {
    res.status(200).json({Message: "Home Page"})
})


//--- server starting ---//
app.listen(PORT , () => {
    console.log(`Server is listning at ${PORT}`)
})
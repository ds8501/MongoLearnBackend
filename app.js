const express = require('express')

const { connectToDb, getDb } = require('./db')
const app = express()

let db
connectToDb((err) => {
    if (!err) {
        app.listen(3001, () => {
            console.log("app listening on port 3001")
        })
        db = getDb()
    }
})


app.get('/plants', (req, res) => {

    let plant = []
    db.collection("plants")
        .find()
        .forEach(name => plant.push(name))

    .then(() => {
            console.log("gettin")
            res.status(200).json(plant)
        })
        .catch(() => {
            res.status(500).json({
                error: 'could not fetch'
            })
        })
})
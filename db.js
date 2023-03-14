const { MongoClient } = require('mongodb')
let dbConnection


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/gardening')


        .then((client) => {
                dbConnection = client.db()
                console.log("Connected to database")
                return cb()

            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection

}
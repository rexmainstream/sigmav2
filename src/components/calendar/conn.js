/* const { Mongoclient } = require("mongodb")
const Db = process.env.DB_URL;
const clinet = new Mongoclient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (db) {
                _db = db.db("Name of DB aka 'sigma'");
                console.log("Connected to Database")
            }
            return callback(err);
        })
    },
    getDb: function () {
        return _db;
    },
}

*/
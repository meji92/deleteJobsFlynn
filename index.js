require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var url = process.env.DATABASE_URL;
var databaseName = process.env.MONGO_DATABASE;

MongoClient.connect(url, function(err, db) {
    var dbo = db.db(databaseName);
    dbo.collection('fablabs').remove({}, function (err, doc){
        console.log("deleted fablabs")
        console.log(err);
        console.log(doc);
        dbo.collection('jobs').remove({}, function (err, doc){
            console.log("deleted jobs")
            console.log(err);
            console.log(doc);
            dbo.collection("fablabs").insertOne({
                    _id: require('mongodb').ObjectID("5a71a18373e3bb000f4b6830"),
                    email: "admin@admin.com",
                    userid: "auth0|5a71a18194059f5e7527e4e3"
                }, function(err, res) {
                    console.log("inserted fablab");
                    console.log(err);
                    console.log(res);
                    db.close();
                });
        });
    });
});

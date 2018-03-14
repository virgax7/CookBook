const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const mongodb = require("mongodb");
const assert = require("assert");
const url = mongodb.MongoClient.connect('mongodb://localhost:27017');

const app = express();

//// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");



app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/users", (req, res) => {
//     res.json([{
//         id: 1,
//         username: "pyoung"
//     }, {
//         id: 2,
//         username: "richard"
//     }])
// });
//
// app.get("/get-data", function(req, res, next){
//     const resultArray = [];
//     mongo.connect(url, function (err, db) {
//         assert.equal(null, err);
//         const cursor = db.collection("user-data").find();
//         cursor.forEach(function(doc, err){
//             assert.equal(null, err);
//             resultArray.push(doc);
//         }, function(){
//             db.close();
//             res.render("app", {items: resultArray});
//         });
//     })
// });

app.post('/post-feedback', function (req, res) {
    url.then(function(db) {
        delete req.body._id; // only for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-feedbacks',  function(req, res) {
    url.then(function(db) {
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});

// app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

// app.post("/insert", function (req, res, next) {
//     const item = {
//         searchContent: req.body.searchInputText
//     };
//
//     mongo.connect(url, function(err, db){
//         assert.equal(null, err);
//         db.collection("user-data").insertOne(item, function(err, result){
//             assert.equal(null,err);
//             console.log("Item is inserted");
//             db.close();
//         });
//     });
//     res.redirect("/");
// });

app.post("/update", function (req, res, next) {

});
app.post("/delete", function (req, res, next) {

});


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;

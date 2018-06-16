var express = require( 'express' );
var nunjucks = require( 'nunjucks' ) ;

var bodyParser = require( 'body-parser' ) ;

//mongo
MongoClient = require('mongodb').MongoClient;

var app = express();
var SomeModel = require('./models/schemaModel');

// Define port to run server on
var port = process.env.PORT || 9000 ;

// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/templates' : 'templates' ;
nunjucks.configure( _templates, {
    autoescape: false,
    cache: false,
    express: app
} ) ;

// Set Nunjucks as rendering engine for pages with .html 
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;
console.log(__dirname);
app.use(express.static(__dirname+'/react-app/public'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my-database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Respond to all GET requests by rendering relevant page using Nunjucks
app.get( '/', function( req, res ) {
  res.render('demo.html' , {
    demo : "demo nunjucks"
  });
} ) ;

//api call
app.get('/api', function( req, res ) {
	SomeModel.find({},function(err,records){
		console.log("rec::::",records);
	res.send(records);
	})
}) ;


//another api call on button to create
app.post('/buttonpress', function( req, res ) {
	var txt = req.body.name;
	// console.log('txxxxxxxtttttt',txt);
	SomeModel.create({ name: txt}, function (err, awesome_instance) {
		console.log("awesome_instance",awesome_instance);
		}); 
}) ;

//another api call on button to delete
app.delete('/delete', function( req, res ) {
	var id = req.query.id;
	console.log('txxxxxxxtttttt',id);
	SomeModel.deleteOne({ _id: id}, function (err, awesome_instance) {
		console.log("deleted",awesome_instance);
		}); 
}) ;

//another api call on submit to add name
app.post('/submitAdd', function( req, res ) {
	var txt = req.body.name;
	console.log('txxxxxxxtttttt',txt);
	SomeModel.create({ name: txt}, function (err, awesome_instance) {
		console.log("awesome_instance",awesome_instance);
	});
}) ;

// Start server
app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
var express = require( 'express' );
var nunjucks = require( 'nunjucks' ) ;

var app = express();

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


// Respond to all GET requests by rendering relevant page using Nunjucks
app.get( '/', function( req, res ) {
  res.render('demo.html' , {
    demo : "demo nunjucks"
  });
} ) ;

//apic call
app.get('/api', function( req, res ) {
  res.send("SUCCESS");
}) ;

// Start server
app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
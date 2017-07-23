let express = require('express');
let app = express();
let path = require("path");
let twig = require('twig');
let port = 3000;
let post = require("../app/controller/PostController");

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.set('views', __dirname + '/../app/templates/views');
app.set('view engine', 'html');
app.engine('html', twig.__express);

app.use(function(req, res, next){
    console.log(new Date() +"|" + req.url);
    next();
});

app.get('/', function(req,res){  
    post.findAllPosts(req, res);
});

app.get('/:slug', function (req, res) {
    post.findPostByTitle(req, res);
});

app.get('/about', function (req, res) {
    let attributes = {
        appTitle : "Julez Blog",
        pageTitle : "About"
    };
    
    res.render("about", { attributes : attributes });
});

app.listen(port, function () {
    console.log('Application listening on port ' + port);    
});
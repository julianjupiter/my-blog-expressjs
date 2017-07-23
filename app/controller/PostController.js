const post = require("../model/post");

exports.findAllPosts = function(req, res) {
    let attributes = {
        appTitle : "Julez Blog",
        pageTitle : "Home",
        postData : post.findAllPosts()
    };

    res.render("post/allPosts", { attributes : attributes });
};

exports.findPostByTitle = function(req, res) {
    let slug = req.params.slug;
    let attributes = {
        appTitle : "Julez Blog",
        pageTitle : "Posts",
        slug : slug,
        post : "../../../posts/" + req.params.slug + ".html",
        postData : post.findPostByTitle(slug)
    };    

    res.render("post/postByTitle", { attributes : attributes });
};
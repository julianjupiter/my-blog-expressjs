var jr = require('../util/json_reader');

exports.findAllPosts = function() {
    return jr.getJsonData('../data/post.json');
};

exports.findPostByTitle = function(slug) {
    let posts = jr.getJsonData('../data/post.json');
    let post = posts.find(function(p) {
        return p.slug == slug;
    });

    return post;
};
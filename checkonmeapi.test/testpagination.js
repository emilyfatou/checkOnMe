Model.paginate({}, { page: 3, limit: 10 }, function(err, result) {
    // result.docs 
    // result.total 
    // result.limit - 10 
    // result.page - 3 
    // result.pages 
});


var page = req.query.page;
var per_page = req.query.per_page;

var x={
    page:page,
    limit:per_page
};
var query ={};


exports.paginate = function paginate(query,x){


Model.paginate(query, x, function(err, result) {
    // result.docs 
    // result.total 
    // result.limit - 10 
    // result.page - 3 
    // result.pages 
});

}
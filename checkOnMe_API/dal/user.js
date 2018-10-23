//load module dependencies
var User=require('../models/user');
var population=[{
    
    path:'profile'
},{
    path:'admin'
},{
    path:'customer'

}];

//create user
exports.create=function create(userData,cb){

//verify if user exists or not
var query={email:userData.email};
User.findOne(query,function userExists(err,existingUser){
    if(err){
        return cb(err);
    }
    if(existingUser){
        return cb(new Error('user already exists'));
    }
});

var userModel =new User(userData);
userModel.save(function saveUser(err,data){
if(err){
    return cb(err);
}
exports.get({_id:data._id},function(err,user){
    if(err){
        return cb(err);
    }
    cb(null,user);
});
});
};

//get a user
exports.get=function get(query,cb){
    
User.findOne(query).populate(population).exec(function (err,user){
    if(err){
        return cb(err);
    }
    cb(null,user || {});
});
};

//get all users
exports.getCollection=function getCollection(query,cb){
User.find(query).populate(population).exec(function getCollection(err,users){
    if(err){
        return cb(err);
    }
    cb(null,users || {});
});
};

//update a user
exports.update=function update(query,updates,cb){
    User.findOneAndUpdate(query,updates).populate(population).exec(function updatecb(err,user){
        if(err){
            return cb(err);
        }
        cb(null,user || {});
    });
};

//delete user
exports.delete=function deleteItem(query,cb){
    User.findOne(query).populate(population).exec(function(err,user){
        if(err){
            return cb(err);
        }
        if(!user){
            return cb(null,{});
        }
        User.remove(function(err){
            if(err){
                return cb(err);
            }
            cb(null,user);
        });
    });
};

//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  User.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
//load module dependencies
var Profile=require('../models/profile');
var population=[{
    path:'profile'
},{
    path:'admin'
},{
    path:'customer'

}];

//create profile
exports.create=function create(profileData,cb){
 
var profileModel =new Profile(profileData);
profileModel.save(function saveprofile(err,data){
if(err){
    return cb(err);
}
exports.get({_id:data._id},function(err,profile){
    if(err){
        return cb(err);
    }
    cb(null,profile);
});
});
};

//get a profile
exports.get=function get(query,cb){
Profile.findOne(query).populate(population).exec(function (err,profile){
    if(err){
        return cb(err);
    }
    cb(null,profile || {});
});
};

//get all profiles
exports.getCollection=function getCollection(query,cb){
Profile.find(query).populate(population).exec(function getCollection(err,profiles){
    if(err){
        return cb(err);
    }
    cb(null,profiles || {});
});
};

//update a profile
exports.update=function update(query,updates,cb){
    Profile.findOneAndUpdate(query,updates).populate(population).exec(function updatecb(err,profile){
        if(err){
            return cb(err);
        }
        cb(null,profile || {});
    });
};

//delete profile
exports.delete=function deleteItem(query,cb){
    Profile.findOne(query).populate(population).exec(function(err,profile){
        if(err){
            return cb(err);
        }
        if(!profile){
            return cb(null,{});
        }
        Profile.remove(function(err){
            if(err){
                return cb(err);
            }
            cb(null,profile);
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
  Profile.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
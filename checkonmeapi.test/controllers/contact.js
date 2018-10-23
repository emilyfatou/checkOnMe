// Load Module Dependencies
var ContactDal = require('../dal/contact');
var CustomerDal = require('../dal/customer');
var MessageDal=require('../dal/message');
var debug = require('debug')('check-on-me-api');

/**
 * post contact
 */
exports.createContact = function createContact(req, res, next) {
  debug('creating contact');
  var body = req.body;
  ContactDal.create({
    name: body.name,
    phone_number: body.phone_number,
     },
    function cb(err, contact) {
      if (err) {
        return next(err);
      };
      res.json(contact);
    });
};

/**
 * Get contact
 */
exports.getContact = function getContact(req, res, next) {
  debug('getting a contact:', req.params._id);

  var query = { _id: req.params._Id };

  ContactDal.get(query, function cb(err, contact) {
    if (err) {
      return next(err);
    }

    // If contact found return it
    if (contact) {
      res.json(contact);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'contact Not Found!',
        status: 404
      });

    }
  });
};


/**
 * Update a contact by id
 */
exports.updateContact = function updateContact(req, res, next) {
  debug('updating contact:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id }

  ContactDal.update(query,body,function cb(err, contact) {
    if (err) {
      return next(err);
    }
    res.json(contact);
  });
};



/**
 * Get contacts
 */
exports.getContacts = function getContacts(req, res, next) {
  debug('getting contacts');

  ContactDal.getCollection({}, function getContacts(err, contacts) {
    if (err) {
      return next(err);
    }
    res.json(contacts);
  });
};

/**
 * delete contact
 */
exports.removeContact = function removeContact(req, res, next) {
  debug('deletting a contact:', req.params._id);

  var query = { _id: req.params._id };
  ContactDal.delete(query, function deletecb(err, contact) {
    if (err) {
      return next(err);
    }
    res.json(contact || {});
});
};

//pagination
exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

//query all
  var query = {};

  //define page and limit per page
  var page = 1*req.query.page;
  var limit = 1*req.query.per_page;
console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  ContactDal.getCollectionByPagination(query, queryOpts, function getByPagination(err,doc){
    console.log(queryOpts);
    if(err){
      return next(err);
    }
    if(!doc){
      res.status(404);
      res.json({messge:'request not found'});
    }
    res.json(doc);
  });
};
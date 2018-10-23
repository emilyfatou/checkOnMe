// Access Layer for contact Data.

// NOTES:
// .population() specifies the references that you want
// mongodb to fill in with the corresponding document
// instead of returning an id.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('check-on-me-api');
 
 var Contact = require('../models/contact');

var population = [{
  path: 'customer'
},{
  path:'message'
}];

/**
 * Create a list of new contacts.
 * 
 * @desc  creates a list of new contacts and inserts it into 
 *        the database
 
/**
 * create a new contact.
 *
 * @desc  creates a new contact and saves them
 *        in the database
 *
 * @param {Object}  contactData  Data for the contact to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(contactData, cb) {
  debug('creating a new contact');

 //Verify if the user exists
  var query = { phone_number:contactData.phone_number };

  Contact.findOne(query, function contactExists(err, existingContact){
    if(err){ return cb(err);}

    if(existingContact){
    return cb(new Error('Contact already exists'));
  }
  });

  // Create contact
  var contactModel = new Contact(contactData);

  contactModel.save(function savecontact(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, contact) {
       if (err) {
        return cb(err);
      }

      cb(null, contact);

    });

  });

};

/**
 * delete a contact
 *
 * @desc  delete data of the contact with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */

//deleting a contact
exports.delete = function deleteItem(query, cb) {
  debug('deleting contact: ', query);

  Contact
    .findOne(query)
    .populate(population)
    .exec(function deleteContact(err, contact) {
      if (err) {
        return cb(err);
      }

      if (!contact) {
        return cb(null, {});
      };

      Contact.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, contact);

      });

    });
};

/**
 * update a contact
 *
 * @desc  update data of the contact with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates, cb) {
  debug('updating contact: ', query);

   
  Contact
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updatecb(err, contact) {
      if (err) {
        return cb(err);
      }
      // cb(null, contact || {}); //if all matches return {}
      //cb(message); // 'This is a test message'});
      cb(null,contact || {});
    });
};

/**
 * get a contact.
 *
 * @desc get a contact with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting contact ', query);

  Contact
    .findOne(query)
    .populate(population)
    .exec(function (err, contact) {
      if (err) {
        return cb(err);
      }

      cb(null, contact || {});
    });
};

/**
 * get a collection of contacts
 *
 * @desc get a collection of contacts from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of contacts');

  Contact.find(query)
    .populate(population)
    .exec(function getContactsCollection(err, contacts) {
      if (err) {
        return cb(err);
      }

      return cb(null, contacts);
    });

};
//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Contact.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
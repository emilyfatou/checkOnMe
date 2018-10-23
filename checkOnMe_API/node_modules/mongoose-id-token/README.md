mongoose-id-token
==================

[![Build Status](https://travis-ci.org/kukulili-labs/mongoose-id-token.svg?branch=master)](https://travis-ci.org/kukulili-labs/mongoose-id-token)

Creating automatically an uniq token field

## Installation

```bash
npm install mongoose-id-token
```

Or add it to your package.json

## Usage

For starting, you need to simply add the mongoose-id-token plugin:

```javascript
var mongoose        = require('mongoose')
  , mongooseIdToken = require('mongoose-id-token')
  , Schema          = mongoose.Schema

var Model = new Schema({
    title:       String
  , message:     String
})

Model.plugin(mongooseIdToken)
```

The plugin will create a new field and will create a uniq token on the first saving of the document. 
You can also change the name of the field by setting the configuration customCollectionName:

```javascript
var options = {
  fieldName: "token"
  createIndex: true,
  tokenLength: 16
}
Model.plugin(mongooseIdToken, options)
```

License
-------

MIT License
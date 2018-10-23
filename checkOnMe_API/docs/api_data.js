define({ "api": [
  {
    "type": "get",
    "url": "/admins/",
    "title": "get all admins",
    "name": "getAdmins",
    "group": "Admins",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get admins/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique admin ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Unique user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>User Role and admin id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"_id\": \"58db20acd79028187ef64ca6\",\n    \"updated_at\": \"2017-03-29T02:49:16.240Z\",\n    \"created_at\": \"2017-03-29T02:49:16.240Z\",\n    \"profile\": {\n      \"_id\": \"58db20acd79028187ef64ca5\",\n      \"updated_at\": \"2017-03-29T02:49:16.252Z\",\n      \"created_at\": \"2017-03-29T02:49:16.228Z\",\n      \"user\": \"58db20acd79028187ef64ca4\",\n      \"first_name\": \"tracy\",\n      \"last_name\": \"chapman\",\n      \"__v\": 0,\n      \"admin\": \"58db20acd79028187ef64ca6\"\n    },\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58db21b0d79028187ef64cac\",\n    \"updated_at\": \"2017-03-29T02:53:36.055Z\",\n    \"created_at\": \"2017-03-29T02:53:36.055Z\",\n    \"profile\": {\n      \"_id\": \"58db21b0d79028187ef64cab\",\n      \"updated_at\": \"2017-03-29T02:53:36.061Z\",\n      \"created_at\": \"2017-03-29T02:53:36.045Z\",\n      \"user\": \"58db21b0d79028187ef64caa\",\n      \"first_name\": \"ed\",\n      \"last_name\": \"sheeran\",\n      \"__v\": 0,\n      \"admin\": \"58db21b0d79028187ef64cac\"\n    },\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admins"
  },
  {
    "type": "get",
    "url": "/admins/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Admins",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/admins/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58db20acd79028187ef64ca6\",\n      \"updated_at\": \"2017-03-29T02:49:16.240Z\",\n      \"created_at\": \"2017-03-29T02:49:16.240Z\",\n      \"profile\": {\n        \"_id\": \"58db20acd79028187ef64ca5\",\n        \"updated_at\": \"2017-03-29T02:49:16.252Z\",\n        \"created_at\": \"2017-03-29T02:49:16.228Z\",\n        \"user\": \"58db20acd79028187ef64ca4\",\n        \"first_name\": \"tracy\",\n        \"last_name\": \"chapman\",\n        \"__v\": 0,\n        \"admin\": \"58db20acd79028187ef64ca6\"\n      },\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58db21b0d79028187ef64cac\",\n      \"updated_at\": \"2017-03-29T02:53:36.055Z\",\n      \"created_at\": \"2017-03-29T02:53:36.055Z\",\n      \"profile\": {\n        \"_id\": \"58db21b0d79028187ef64cab\",\n        \"updated_at\": \"2017-03-29T02:53:36.061Z\",\n        \"created_at\": \"2017-03-29T02:53:36.045Z\",\n        \"user\": \"58db21b0d79028187ef64caa\",\n        \"first_name\": \"ed\",\n        \"last_name\": \"sheeran\",\n        \"__v\": 0,\n        \"admin\": \"58db21b0d79028187ef64cac\"\n      },\n      \"__v\": 0\n    }\n  ],\n  \"total\": 3,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admins"
  },
  {
    "type": "get",
    "url": "/customers/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Customers",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/customers/paginate?page=1&per_page=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58db1fa1d79028187ef64ca2\",\n      \"updated_at\": \"2017-03-29T02:44:49.284Z\",\n      \"created_at\": \"2017-03-29T02:44:49.284Z\",\n      \"profile\": {\n        \"_id\": \"58db1fa1d79028187ef64ca1\",\n        \"updated_at\": \"2017-03-29T02:44:49.294Z\",\n        \"created_at\": \"2017-03-29T02:44:49.266Z\",\n        \"user\": \"58db1fa1d79028187ef64ca0\",\n        \"first_name\": \"sam\",\n        \"last_name\": \"smith\",\n        \"__v\": 0,\n        \"customer\": \"58db1fa1d79028187ef64ca2\"\n      },\n      \"emergency_type\": \"select\",\n      \"location\": \"\",\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": [],\n      \"contact\": []\n    },\n    {\n      \"_id\": \"58db2165d79028187ef64ca9\",\n      \"updated_at\": \"2017-03-29T02:52:21.670Z\",\n      \"created_at\": \"2017-03-29T02:52:21.670Z\",\n      \"profile\": {\n        \"_id\": \"58db2165d79028187ef64ca8\",\n        \"updated_at\": \"2017-03-29T02:52:21.676Z\",\n        \"created_at\": \"2017-03-29T02:52:21.661Z\",\n        \"user\": \"58db2165d79028187ef64ca7\",\n        \"first_name\": \"hunter\",\n        \"last_name\": \"hayes\",\n        \"__v\": 0,\n        \"customer\": \"58db2165d79028187ef64ca9\"\n      },\n      \"emergency_type\": \"select\",\n      \"location\": \"\",\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": [],\n      \"contact\": []\n    },\n    {\n      \"_id\": \"58dba8a5378c0c593b7432c5\",\n      \"updated_at\": \"2017-03-29T12:29:25.014Z\",\n      \"created_at\": \"2017-03-29T12:29:25.014Z\",\n      \"profile\": {\n        \"_id\": \"58dba8a4378c0c593b7432c4\",\n        \"updated_at\": \"2017-03-29T12:29:25.083Z\",\n        \"created_at\": \"2017-03-29T12:29:24.885Z\",\n        \"user\": \"58dba8a4378c0c593b7432c3\",\n        \"first_name\": \"harmony\",\n        \"last_name\": \"fifth\",\n        \"__v\": 0,\n        \"customer\": \"58dba8a5378c0c593b7432c5\"\n      },\n      \"emergency_type\": \"select\",\n      \"location\": \"\",\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": [],\n      \"contact\": []\n    }\n  ],\n  \"total\": 17,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 6\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/customers/",
    "title": "get all customers",
    "name": "getCustomers",
    "group": "Customers",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get customers/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique customer ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Unique user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the customer user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the customer user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>User Role and customer id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58db1fa1d79028187ef64ca2\",\n    \"updated_at\": \"2017-03-29T02:44:49.284Z\",\n    \"created_at\": \"2017-03-29T02:44:49.284Z\",\n    \"profile\": {\n      \"_id\": \"58db1fa1d79028187ef64ca1\",\n      \"updated_at\": \"2017-03-29T02:44:49.294Z\",\n      \"created_at\": \"2017-03-29T02:44:49.266Z\",\n      \"user\": \"58db1fa1d79028187ef64ca0\",\n      \"first_name\": \"sam\",\n      \"last_name\": \"smith\",\n      \"__v\": 0,\n      \"customer\": \"58db1fa1d79028187ef64ca2\"\n    },\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n  {\n    \"_id\": \"58db2165d79028187ef64ca9\",\n    \"updated_at\": \"2017-03-29T02:52:21.670Z\",\n    \"created_at\": \"2017-03-29T02:52:21.670Z\",\n    \"profile\": {\n      \"_id\": \"58db2165d79028187ef64ca8\",\n      \"updated_at\": \"2017-03-29T02:52:21.676Z\",\n      \"created_at\": \"2017-03-29T02:52:21.661Z\",\n      \"user\": \"58db2165d79028187ef64ca7\",\n      \"first_name\": \"hunter\",\n      \"last_name\": \"hayes\",\n      \"__v\": 0,\n      \"customer\": \"58db2165d79028187ef64ca9\"\n    },\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "Customers"
  },
  {
    "type": "post",
    "url": "/messages/send",
    "title": "send a message",
    "name": "sendMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the message body to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>the reciver of the message contacts or 911</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>the sender of the message customer phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/messages/send\n{\n\t\n  \"from\":\"+251921405957\",\n   \"message\":\"check-on-me API connection test message\",\n   \"to\":\"+251967823595\"\n   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deleivered",
            "description": "<p>delivery status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the message body being sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK \n{\n\"message\":\"message sent succssfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "/profiles/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Profiles",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/profiles/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n \"docs\": [\n       {\n     \"_id\": \"590a13188b8dab6b4a46d208\",\n     \"updated_at\": \"2017-05-03T20:15:44.336Z\",\n     \"created_at\": \"2017-05-03T17:27:52.649Z\",\n     \"user\": \"590a13188b8dab6b4a46d207\",\n     \"first_name\": \"simret\",\n     \"last_name\": \"abu\",\n     \"phone_number\": \"+2514879666\",\n     \"__v\": 0,\n     \"customer\": {\n       \"_id\": \"590a13188b8dab6b4a46d209\",\n       \"updated_at\": \"2017-05-03T17:27:52.684Z\",\n       \"created_at\": \"2017-05-03T17:27:52.684Z\",\n       \"profile\": \"590a13188b8dab6b4a46d208\",\n       \"contact\": [],\n       \"__v\": 0,\n       \"message\": [],\n       \"Service_provider\": []\n     },\n     \"age\": 25,\n     \"country\": \"ethiopia\",\n     \"state\": \"oromiya\",\n     \"city\": \"adama\",\n     \"emergency_contact1\": \"romha\",\n     \"phone_number1\": \"+123456789\",\n     \"emergency_contact2\": \"rich\",\n     \"phone_number2\": \"00000000\",\n     \"emergency_contacts\": []\n   },\n   {\n     \"_id\": \"590acf6f8703f80f092262ef\",\n     \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n     \"created_at\": \"2017-05-04T06:51:27.538Z\",\n     \"user\": \"590acf6f8703f80f092262ee\",\n     \"first_name\": \"simret\",\n     \"last_name\": \"abu\",\n     \"phone_number\": \"+2514879666\",\n     \"__v\": 0,\n     \"customer\": {\n       \"_id\": \"590acf6f8703f80f092262f0\",\n       \"updated_at\": \"2017-05-04T06:51:27.650Z\",\n       \"created_at\": \"2017-05-04T06:51:27.650Z\",\n       \"profile\": \"590acf6f8703f80f092262ef\",\n       \"contact\": [],\n       \"__v\": 0,\n       \"message\": [],\n       \"Service_provider\": []\n     },\n     \"age\": 25,\n     \"country\": \"ethiopia\",\n     \"state\": \"oromiya\",\n     \"city\": \"adama\",\n     \"emergency_contacts\": [\n       {\n         \"_id\": \"590b0f2aae30a1352a0620fd\",\n         \"contact_name1\": \"tam\",\n         \"phone_number1\": \"123456789\",\n         \"contact_name2\": \"romha\",\n         \"phone_number2\": \"012345789\"\n       }\n     ]\n   }\n ],\n  \"total\": 10,\n \"limit\": 2,\n \"page\": 1,\n \"pages\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:id",
    "title": "get a profile",
    "name": "getProfile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique profile id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/profiles/590acf6f8703f80f092262ef",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user information from user signup</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "emergency_contacts",
            "description": "<p>emergency contacts information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n \"_id\": \"58da1ac087f7855c63882eef\",\n \"updated_at\": \"2017-03-29T01:45:25.911Z\",\n \"created_at\": \"2017-03-28T08:11:44.622Z\",\n \"user\": {\n {\n \"_id\": \"590acf6f8703f80f092262ef\",\n \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n \"created_at\": \"2017-05-04T06:51:27.538Z\",\n \"user\": \"590acf6f8703f80f092262ee\",\n \"first_name\": \"simret\",\n \"last_name\": \"abu\",\n \"phone_number\": \"+2514879666\",\n \"__v\": 0,\n \"customer\": {\n   \"_id\": \"590acf6f8703f80f092262f0\",\n   \"updated_at\": \"2017-05-04T06:51:27.650Z\",\n   \"created_at\": \"2017-05-04T06:51:27.650Z\",\n   \"profile\": \"590acf6f8703f80f092262ef\",\n   \"contact\": [],\n   \"__v\": 0,\n   \"message\": [],\n   \"Service_provider\": []\n },\n \"age\": 25,\n \"country\": \"ethiopia\",\n \"state\": \"oromiya\",\n \"city\": \"adama\",\n \"emergency_contacts\": [\n   {\n     \"_id\": \"590b0f2aae30a1352a0620fd\",\n     \"contact_name1\": \"tam\",\n     \"phone_number1\": \"123456789\",\n     \"contact_name2\": \"romha\",\n     \"phone_number2\": \"012345789\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/",
    "title": "get all profiles",
    "name": "getProfiles",
    "group": "Profiles",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/profiles/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user information from user signup</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "emergency_contacts",
            "description": "<p>emergency contacts information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "  HTTP/1.1 200 OK\n\n[  {\n    \"_id\": \"590a13188b8dab6b4a46d208\",\n    \"updated_at\": \"2017-05-03T20:15:44.336Z\",\n    \"created_at\": \"2017-05-03T17:27:52.649Z\",\n    \"user\": \"590a13188b8dab6b4a46d207\",\n    \"first_name\": \"simret\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+2514879666\",\n    \"__v\": 0,\n    \"customer\": {\n      \"_id\": \"590a13188b8dab6b4a46d209\",\n      \"updated_at\": \"2017-05-03T17:27:52.684Z\",\n      \"created_at\": \"2017-05-03T17:27:52.684Z\",\n      \"profile\": \"590a13188b8dab6b4a46d208\",\n      \"contact\": [],\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": []\n    },\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"state\": \"oromiya\",\n    \"city\": \"adama\",\n    \"emergency_contact1\": \"romha\",\n    \"phone_number1\": \"+123456789\",\n    \"emergency_contact2\": \"rich\",\n    \"phone_number2\": \"00000000\",\n    \"emergency_contacts\": []\n  },\n  {\n    \"_id\": \"590acf6f8703f80f092262ef\",\n    \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n    \"created_at\": \"2017-05-04T06:51:27.538Z\",\n    \"user\": \"590acf6f8703f80f092262ee\",\n    \"first_name\": \"simret\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+2514879666\",\n    \"__v\": 0,\n    \"customer\": {\n      \"_id\": \"590acf6f8703f80f092262f0\",\n      \"updated_at\": \"2017-05-04T06:51:27.650Z\",\n      \"created_at\": \"2017-05-04T06:51:27.650Z\",\n      \"profile\": \"590acf6f8703f80f092262ef\",\n      \"contact\": [],\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": []\n    },\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"state\": \"oromiya\",\n    \"city\": \"adama\",\n    \"emergency_contacts\": [\n      {\n        \"_id\": \"590b0f2aae30a1352a0620fd\",\n        \"contact_name1\": \"tam\",\n        \"phone_number1\": \"123456789\",\n        \"contact_name2\": \"romha\",\n        \"phone_number2\": \"012345789\"\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/search",
    "title": "search a customer by name",
    "name": "searchCustomer",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>customer phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/profiles/search?first_name='simret'",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user information from user signup</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "emergency_contacts",
            "description": "<p>emergency contacts information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"_id\": \"590acf6f8703f80f092262ef\",\n    \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n    \"created_at\": \"2017-05-04T06:51:27.538Z\",\n    \"user\": \"590acf6f8703f80f092262ee\",\n    \"first_name\": \"simret\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+2514879666\",\n    \"__v\": 0,\n    \"customer\": {\n      \"_id\": \"590acf6f8703f80f092262f0\",\n      \"updated_at\": \"2017-05-04T06:51:27.650Z\",\n      \"created_at\": \"2017-05-04T06:51:27.650Z\",\n      \"profile\": \"590acf6f8703f80f092262ef\",\n      \"contact\": [],\n      \"__v\": 0,\n      \"message\": [],\n      \"Service_provider\": []\n    },\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"state\": \"oromiya\",\n    \"city\": \"adama\",\n    \"emergency_contacts\": [\n      {\n        \"_id\": \"590b0f2aae30a1352a0620fd\",\n        \"contact_name1\": \"tam\",\n        \"phone_number1\": \"123456789\",\n        \"contact_name2\": \"romha\",\n        \"phone_number2\": \"012345789\"\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "put",
    "url": "/profiles/:_id",
    "title": "update a profile",
    "name": "updateProfile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>the state where the user lives in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the city where the user lives in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_contacts",
            "description": "<p>contacts to be regestered as emergency contacts</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_name1",
            "description": "<p>name of emergency contact1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number1",
            "description": "<p>phone number of contact1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_name2",
            "description": "<p>name of emergency contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number2",
            "description": "<p>phone number of contact2</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/profiles/590acf6f8703f80f092262ef\n\n{\n\t\n \"age\":\"25\",\n \"country\":\"ethiopia\",\n \"state\":\"oromiya\",\n \"city\":\"adama\",\n \"phone_number\":\"+2514879666\",\n \"emergency_contacts\":{\n \"contact_name1\":\"tam\",\n \"phone_number1\":\"123456789\",\n \"contact_name2\":\"romha\",\n \"phone_number2\":\"012345789\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user information from user signup</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "emergency_contacts",
            "description": "<p>emergency contacts information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n \"_id\": \"590acf6f8703f80f092262ef\",\n \"updated_at\": \"2017-05-04T07:52:31.491Z\",\n \"created_at\": \"2017-05-04T06:51:27.538Z\",\n \"user\": \"590acf6f8703f80f092262ee\",\n \"first_name\": \"simret\",\n \"last_name\": \"abu\",\n \"phone_number\": \"+2514879666\",\n \"__v\": 0,\n \"customer\": {\n   \"_id\": \"590acf6f8703f80f092262f0\",\n   \"updated_at\": \"2017-05-04T06:51:27.650Z\",\n   \"created_at\": \"2017-05-04T06:51:27.650Z\",\n   \"profile\": \"590acf6f8703f80f092262ef\",\n   \"contact\": [],\n   \"__v\": 0,\n   \"message\": [],\n   \"Service_provider\": []\n },\n \"age\": 25,\n \"country\": \"ethiopia\",\n \"state\": \"oromiya\",\n \"city\": \"adama\",\n \"emergency_contacts\": [\n   {\n     \"_id\": \"590addbf2aaae81c1ec04476\",\n     \"contact_name1\": \"tam\",\n     \"phone_number1\": \"123456789\",\n     \"contact_name2\": \"romha\",\n     \"phone_number2\": \"012345789\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "post",
    "url": "/ServiceProviders/",
    "title": "create ServiceProvider",
    "name": "createServiceProvider",
    "group": "ServiceProviders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>number phone number of the service provider 911</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"phone_number\":\"911\",\n \"name\":\"ambulance\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique serviceprovider ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the serviceprovider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the serviceprovider 911</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"_id\": \"59021139cabc341cbf797143\",\n  \"updated_at\": \"2017-04-27T15:41:45.672Z\",\n  \"created_at\": \"2017-04-27T15:41:45.672Z\",\n  \"name\": \"ambulance\",\n  \"__v\": 0,\n  \"phone_number\": \"911\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/serviceprovider.js",
    "groupTitle": "ServiceProviders"
  },
  {
    "type": "get",
    "url": "/ServiceProviders/:_id",
    "title": "get ServiceProvider",
    "name": "getServiceProvider",
    "group": "ServiceProviders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique service provider id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nserviceproviders/58da06b027ccc951a6c4ec57",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique serviceprovider ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the serviceprovider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the serviceprovider 911</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n \"_id\": \"59021139cabc341cbf797143\",\n \"updated_at\": \"2017-04-27T15:41:45.672Z\",\n \"created_at\": \"2017-04-27T15:41:45.672Z\",\n \"name\": \"ambulance\",\n \"__v\": 0,\n \"phone_number\": \"911\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/serviceprovider.js",
    "groupTitle": "ServiceProviders"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "user signup",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type - admin or customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/users/signup\n{\n\t\"first_name\":\"simret\",\n\t\"last_name\":\"abu\",\n\t\"email\":\"fere@gmail.com\",\n\t\"password\":\"123456\",\n\t\"user_type\":\"customer\",\n\t\"phone_number\":\"+25191444494\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n  \"_id\": \"590b305b8d85085395256f84\",\n  \"updated_at\": \"2017-05-04T13:44:59.405Z\",\n  \"created_at\": \"2017-05-04T13:44:59.405Z\",\n  \"email\": \"fere@gmail.com\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "remove a specific user",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>id   the unique user id to be delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/users/590b305b8d85085395256f84\n{\n  \"_id\": \"590b305b8d85085395256f84\",\n  \"updated_at\": \"2017-05-04T13:45:23.197Z\",\n  \"created_at\": \"2017-05-04T13:44:59.405Z\",\n  \"email\": \"fere@gmail.com\",\n  \"password\": \"$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.\",\n  \"profile\": {\n    \"_id\": \"590b305b8d85085395256f85\",\n    \"updated_at\": \"2017-05-04T13:46:23.581Z\",\n    \"created_at\": \"2017-05-04T13:44:59.609Z\",\n    \"user\": \"590b305b8d85085395256f84\",\n    \"first_name\": \"simret\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+2514879666\",\n    \"__v\": 0,\n    \"customer\": \"590b305b8d85085395256f86\",\n    \"age\": 35,\n    \"country\": \"ethiopia\",\n    \"state\": \"harara\",\n    \"city\": \"dire\",\n    \"emergency_contacts\": [\n      {\n        \"_id\": \"590b30af8d85085395256f89\",\n        \"contact_name1\": \"der\",\n        \"phone_number1\": \"123456789\",\n        \"contact_name2\": \"biruk\",\n        \"phone_number2\": \"012345789\"\n      }\n    ]\n  },\n  \"last_login\": \"2017-05-04T13:45:23.195Z\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "user login",
    "name": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/users/login\n{\n\t\"email\":\"fere@gmail.com\",\n\t\"password\":\"123456\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>generated token id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile etails</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"SnZLM4LcRonXYaKzTMG5\",\n  \"user\": {\n    \"_id\": \"590b305b8d85085395256f84\",\n    \"updated_at\": \"2017-05-04T13:44:59.616Z\",\n    \"created_at\": \"2017-05-04T13:44:59.405Z\",\n    \"email\": \"fere@gmail.com\",\n    \"profile\": {\n      \"_id\": \"590b305b8d85085395256f85\",\n      \"updated_at\": \"2017-05-04T13:44:59.648Z\",\n      \"created_at\": \"2017-05-04T13:44:59.609Z\",\n      \"user\": \"590b305b8d85085395256f84\",\n      \"first_name\": \"simret\",\n      \"last_name\": \"abu\",\n      \"phone_number\": \"+25191444494\",\n      \"__v\": 0,\n      \"customer\": \"590b305b8d85085395256f86\",\n      \"emergency_contacts\": []\n    },\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/forgotPassword/email",
    "title": "forgot password",
    "name": "forgotPassword",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/users/forgotPassword/tamri.mesfin@gmail.com",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n\"message\": \"check your email inbox for a new password\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/users/paginate?page=1&per_page=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n    {\n      \"_id\": \"590a13188b8dab6b4a46d207\",\n      \"updated_at\": \"2017-05-03T17:28:08.839Z\",\n      \"created_at\": \"2017-05-03T17:27:52.501Z\",\n      \"email\": \"y@gmail.com\",\n      \"password\": \"$2a$07$0Z6p3FVe.DUehE34vkQEnOI6hF8vlEar.q7SmvImCAVKYEXo49a6q\",\n      \"profile\": {\n        \"_id\": \"590a13188b8dab6b4a46d208\",\n        \"updated_at\": \"2017-05-03T20:15:44.336Z\",\n        \"created_at\": \"2017-05-03T17:27:52.649Z\",\n        \"user\": \"590a13188b8dab6b4a46d207\",\n        \"first_name\": \"simret\",\n        \"last_name\": \"abu\",\n        \"phone_number\": \"+2514879666\",\n        \"__v\": 0,\n        \"customer\": \"590a13188b8dab6b4a46d209\",\n        \"age\": 25,\n        \"country\": \"ethiopia\",\n        \"state\": \"oromiya\",\n        \"city\": \"adama\",\n        \"emergency_contact1\": \"romha\",\n        \"phone_number1\": \"+123456789\",\n        \"emergency_contact2\": \"rich\",\n        \"phone_number2\": \"00000000\",\n        \"emergency_contacts\": []\n      },\n      \"last_login\": \"2017-05-03T17:28:08.838Z\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    },\n    {\n      \"_id\": \"590acf6f8703f80f092262ee\",\n      \"updated_at\": \"2017-05-04T06:52:02.135Z\",\n      \"created_at\": \"2017-05-04T06:51:27.333Z\",\n      \"email\": \"ere@gmail.com\",\n      \"password\": \"$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi\",\n      \"profile\": {\n        \"_id\": \"590acf6f8703f80f092262ef\",\n        \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n        \"created_at\": \"2017-05-04T06:51:27.538Z\",\n        \"user\": \"590acf6f8703f80f092262ee\",\n        \"first_name\": \"simret\",\n        \"last_name\": \"abu\",\n        \"phone_number\": \"+2514879666\",\n        \"__v\": 0,\n        \"customer\": \"590acf6f8703f80f092262f0\",\n        \"age\": 25,\n        \"country\": \"ethiopia\",\n        \"state\": \"oromiya\",\n        \"city\": \"adama\",\n        \"emergency_contacts\": [\n          {\n            \"_id\": \"590b0f2aae30a1352a0620fd\",\n            \"contact_name1\": \"tam\",\n            \"phone_number1\": \"123456789\",\n            \"contact_name2\": \"romha\",\n            \"phone_number2\": \"012345789\"\n          }\n        ]\n      },\n      \"last_login\": \"2017-05-04T06:52:02.134Z\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    },\n    {\n      \"_id\": \"590b305b8d85085395256f84\",\n      \"updated_at\": \"2017-05-04T13:45:23.197Z\",\n      \"created_at\": \"2017-05-04T13:44:59.405Z\",\n      \"email\": \"fere@gmail.com\",\n      \"password\": \"$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.\",\n      \"profile\": {\n        \"_id\": \"590b305b8d85085395256f85\",\n        \"updated_at\": \"2017-05-04T13:46:23.581Z\",\n        \"created_at\": \"2017-05-04T13:44:59.609Z\",\n        \"user\": \"590b305b8d85085395256f84\",\n        \"first_name\": \"simret\",\n        \"last_name\": \"abu\",\n        \"phone_number\": \"+2514879666\",\n        \"__v\": 0,\n        \"customer\": \"590b305b8d85085395256f86\",\n        \"age\": 35,\n        \"country\": \"ethiopia\",\n        \"state\": \"harara\",\n        \"city\": \"dire\",\n        \"emergency_contacts\": [\n          {\n            \"_id\": \"590b30af8d85085395256f89\",\n            \"contact_name1\": \"der\",\n            \"phone_number1\": \"123456789\",\n            \"contact_name2\": \"biruk\",\n            \"phone_number2\": \"012345789\"\n          }\n        ]\n      },\n      \"last_login\": \"2017-05-04T13:45:23.195Z\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    }\n  ],\n \"total\": 33,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 11\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "get a specific user",
    "name": "getUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/users//590acf6f8703f80f092262ee",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"590acf6f8703f80f092262ee\",\n  \"updated_at\": \"2017-05-04T06:52:02.135Z\",\n  \"created_at\": \"2017-05-04T06:51:27.333Z\",\n  \"email\": \"ere@gmail.com\",\n  \"password\": \"$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi\",\n  \"profile\": {\n    \"_id\": \"590acf6f8703f80f092262ef\",\n    \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n    \"created_at\": \"2017-05-04T06:51:27.538Z\",\n    \"user\": \"590acf6f8703f80f092262ee\",\n    \"first_name\": \"simret\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+2514879666\",\n    \"__v\": 0,\n    \"customer\": \"590acf6f8703f80f092262f0\",\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"state\": \"oromiya\",\n    \"city\": \"adama\",\n    \"emergency_contacts\": [\n      {\n        \"_id\": \"590b0f2aae30a1352a0620fd\",\n        \"contact_name1\": \"tam\",\n        \"phone_number1\": \"123456789\",\n        \"contact_name2\": \"romha\",\n        \"phone_number2\": \"012345789\"\n      }\n    ]\n  },\n  \"last_login\": \"2017-05-04T06:52:02.134Z\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "get all users",
    "name": "getUsers",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/users/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"590a13188b8dab6b4a46d207\",\n    \"updated_at\": \"2017-05-03T17:28:08.839Z\",\n    \"created_at\": \"2017-05-03T17:27:52.501Z\",\n    \"email\": \"y@gmail.com\",\n    \"password\": \"$2a$07$0Z6p3FVe.DUehE34vkQEnOI6hF8vlEar.q7SmvImCAVKYEXo49a6q\",\n    \"profile\": {\n      \"_id\": \"590a13188b8dab6b4a46d208\",\n      \"updated_at\": \"2017-05-03T20:15:44.336Z\",\n      \"created_at\": \"2017-05-03T17:27:52.649Z\",\n      \"user\": \"590a13188b8dab6b4a46d207\",\n      \"first_name\": \"simret\",\n      \"last_name\": \"abu\",\n      \"phone_number\": \"+2514879666\",\n      \"__v\": 0,\n      \"customer\": \"590a13188b8dab6b4a46d209\",\n      \"age\": 25,\n      \"country\": \"ethiopia\",\n      \"state\": \"oromiya\",\n      \"city\": \"adama\",\n      \"emergency_contact1\": \"romha\",\n      \"phone_number1\": \"+123456789\",\n      \"emergency_contact2\": \"rich\",\n      \"phone_number2\": \"00000000\",\n      \"emergency_contacts\": []\n    },\n    \"last_login\": \"2017-05-03T17:28:08.838Z\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  {\n    \"_id\": \"590acf6f8703f80f092262ee\",\n    \"updated_at\": \"2017-05-04T06:52:02.135Z\",\n    \"created_at\": \"2017-05-04T06:51:27.333Z\",\n    \"email\": \"ere@gmail.com\",\n    \"password\": \"$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi\",\n    \"profile\": {\n      \"_id\": \"590acf6f8703f80f092262ef\",\n      \"updated_at\": \"2017-05-04T11:23:22.513Z\",\n      \"created_at\": \"2017-05-04T06:51:27.538Z\",\n      \"user\": \"590acf6f8703f80f092262ee\",\n      \"first_name\": \"simret\",\n      \"last_name\": \"abu\",\n      \"phone_number\": \"+2514879666\",\n      \"__v\": 0,\n      \"customer\": \"590acf6f8703f80f092262f0\",\n      \"age\": 25,\n      \"country\": \"ethiopia\",\n      \"state\": \"oromiya\",\n      \"city\": \"adama\",\n      \"emergency_contacts\": [\n        {\n          \"_id\": \"590b0f2aae30a1352a0620fd\",\n          \"contact_name1\": \"tam\",\n          \"phone_number1\": \"123456789\",\n          \"contact_name2\": \"romha\",\n          \"phone_number2\": \"012345789\"\n        }\n      ]\n    },\n    \"last_login\": \"2017-05-04T06:52:02.134Z\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  {\n    \"_id\": \"590b305b8d85085395256f84\",\n    \"updated_at\": \"2017-05-04T13:45:23.197Z\",\n    \"created_at\": \"2017-05-04T13:44:59.405Z\",\n    \"email\": \"fere@gmail.com\",\n    \"password\": \"$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.\",\n    \"profile\": {\n      \"_id\": \"590b305b8d85085395256f85\",\n      \"updated_at\": \"2017-05-04T13:46:23.581Z\",\n      \"created_at\": \"2017-05-04T13:44:59.609Z\",\n      \"user\": \"590b305b8d85085395256f84\",\n      \"first_name\": \"simret\",\n      \"last_name\": \"abu\",\n      \"phone_number\": \"+2514879666\",\n      \"__v\": 0,\n      \"customer\": \"590b305b8d85085395256f86\",\n      \"age\": 35,\n      \"country\": \"ethiopia\",\n      \"state\": \"harara\",\n      \"city\": \"dire\",\n      \"emergency_contacts\": [\n        {\n          \"_id\": \"590b30af8d85085395256f89\",\n          \"contact_name1\": \"der\",\n          \"phone_number1\": \"123456789\",\n          \"contact_name2\": \"biruk\",\n          \"phone_number2\": \"012345789\"\n        }\n      ]\n    },\n    \"last_login\": \"2017-05-04T13:45:23.195Z\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "user logging out",
    "name": "logout",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenID",
            "description": "<p>user token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nusers/58da182b87f7855c63882ee9/logout",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"message\": \"user Logged out successfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/updatePass/:_id",
    "title": "change password",
    "name": "passwordChange",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>current user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>the new passwod to be used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t \n\t\"password\":\"password\",\n\t\"new_password\":\"rlylongpassword\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"message\": \"password changed Sucessfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:_id",
    "title": "update a user",
    "name": "updateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/users/590c7bac5c51dc380ef8ef7a\n{\n\t \n\t\"email\":\"xyz@gmail.com\",\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"590c7bac5c51dc380ef8ef7a\",\n  \"updated_at\": \"2017-05-06T03:00:04.719Z\",\n  \"created_at\": \"2017-05-05T13:18:36.758Z\",\n  \"email\": \"xyz@gmail.com\",\n  \"password\": \"$2a$07$ffg38Gx8NlKHxszDlG2EbO1ufYQdeT7XOkt1YhbaWDsygUhto394e\",\n  \"profile\": {\n    \"_id\": \"590c7bad5c51dc380ef8ef7b\",\n    \"updated_at\": \"2017-05-05T13:20:55.416Z\",\n    \"created_at\": \"2017-05-05T13:18:37.339Z\",\n    \"user\": \"590c7bac5c51dc380ef8ef7a\",\n    \"first_name\": \"nathan\",\n    \"last_name\": \"abu\",\n    \"phone_number\": \"+251967823595\",\n    \"__v\": 0,\n    \"customer\": \"590c7bad5c51dc380ef8ef7c\",\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"state\": \"oromiya\",\n    \"city\": \"adama\",\n    \"emergency_contacts\": [\n      {\n        \"_id\": \"590c7c375c51dc380ef8ef7f\",\n        \"contact_name1\": \"tam\",\n        \"phone_number1\": \"+251921405957\"\n      }\n    ]\n  },\n  \"last_login\": \"2017-05-05T14:10:19.400Z\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  }
] });

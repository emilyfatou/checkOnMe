define({ "api": [
  {
    "type": "get",
    "url": "/admins/",
    "title": "get all admin Users",
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
    "title": "paginate admin user records",
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
    "type": "post",
    "url": "/contacts/",
    "title": "Crate New Contact",
    "name": "CreateContact",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n\t\"name\":\"jane doe\",\n\t\"phone_number\":\"0921405957\",\n   }",
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
            "description": "<p>Unique contact ID</p>"
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
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"_id\": \"58db2a3505cbfa20dd08f49d\",\n  \"updated_at\": \"2017-03-29T03:29:57.752Z\",\n  \"created_at\": \"2017-03-29T03:29:57.752Z\",\n  \"name\": \"jessy \",\n  \"phone_number\": \"+25110101213\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "delete",
    "url": "/contacts/:id",
    "title": "remove a specific contact information",
    "name": "DeleteContact",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique contact ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"_id\": \"58db28cb7f10171fff0b666a\",\n   \"updated_at\": \"2017-03-29T03:23:55.522Z\",\n   \"created_at\": \"2017-03-29T03:23:55.522Z\",\n   \"name\": \"winie \",\n   \"phone_number\": \"0921405957\",\n   \"__v\": 0\n }",
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
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/contacts/:id",
    "title": "Request information of a specific contact",
    "name": "GetContact",
    "group": "Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique contact ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"_id\": \"58db2a3505cbfa20dd08f49d\",\n  \"updated_at\": \"2017-03-29T03:29:57.752Z\",\n  \"created_at\": \"2017-03-29T03:29:57.752Z\",\n  \"name\": \"jessy \",\n  \"phone_number\": \"+25110101213\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/contacts/",
    "title": "Request information of all Contacts",
    "name": "GetContacts",
    "group": "Contacts",
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
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  [\n  {\n    \"_id\": \"58db28cb7f10171fff0b666a\",\n    \"updated_at\": \"2017-03-29T03:23:55.522Z\",\n    \"created_at\": \"2017-03-29T03:23:55.522Z\",\n    \"name\": \"winie \",\n    \"phone_number\": \"0921405957\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58db28d07f10171fff0b666b\",\n    \"updated_at\": \"2017-03-29T03:24:00.094Z\",\n    \"created_at\": \"2017-03-29T03:24:00.094Z\",\n    \"name\": \"winie \",\n    \"phone_number\": \"0921405957\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58db28fd53e2fc20450223f9\",\n    \"updated_at\": \"2017-03-29T03:24:45.142Z\",\n    \"created_at\": \"2017-03-29T03:24:45.142Z\",\n    \"name\": \"john \",\n    \"phone_number\": \"+25110111213\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58db2a3505cbfa20dd08f49d\",\n    \"updated_at\": \"2017-03-29T03:29:57.752Z\",\n    \"created_at\": \"2017-03-29T03:29:57.752Z\",\n    \"name\": \"jessy \",\n    \"phone_number\": \"+25110101213\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "put",
    "url": "/contacts/:id",
    "title": "update Contact information by id",
    "name": "PutContact",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>update Contacts data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"name\":\"winie\",\n\"phone_number\":\"0921405957\"\n }",
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
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"58db28cb7f10171fff0b666a\",\n  \"updated_at\": \"2017-03-29T03:23:55.522Z\",\n  \"created_at\": \"2017-03-29T03:23:55.522Z\",\n  \"name\": \"winie \",\n  \"phone_number\": \"0921405957\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/contacts/paginate",
    "title": "paginate contacts records",
    "name": "getByPagination",
    "group": "Contacts",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/contacts/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58db28cb7f10171fff0b666a\",\n      \"updated_at\": \"2017-03-29T03:23:55.522Z\",\n      \"created_at\": \"2017-03-29T03:23:55.522Z\",\n      \"name\": \"winie \",\n      \"phone_number\": \"0921405957\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58db28d07f10171fff0b666b\",\n      \"updated_at\": \"2017-03-29T03:24:00.094Z\",\n      \"created_at\": \"2017-03-29T03:24:00.094Z\",\n      \"name\": \"winie \",\n      \"phone_number\": \"0921405957\",\n      \"__v\": 0\n    }\n  ],\n  \"total\": 8,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 4\n}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/customers/paginate",
    "title": "paginate customer records",
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
    "title": "get all customer User types",
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
    "url": "/messages/create",
    "title": "create emergency message",
    "name": "createMessage",
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
            "field": "location",
            "description": "<p>location of the customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\"message\":\"this is a test emergency message\",\n\"location\":\"addis ababa\",\n   }",
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
            "description": "<p>Unique message ID</p>"
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
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59007da5eb0e663393eec443\",\n  \"updated_at\": \"2017-04-26T10:59:49.447Z\",\n  \"created_at\": \"2017-04-26T10:59:49.447Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\"\n  }\n}",
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
    "url": "/messages/paginate",
    "title": "get messages by pagination",
    "name": "getByPagination",
    "group": "Messages",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/messages/paginate?page=1&per_page=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n      \"_id\": \"59007da5eb0e663393eec443\",\n      \"updated_at\": \"2017-04-26T10:59:49.447Z\",\n      \"created_at\": \"2017-04-26T10:59:49.447Z\",\n      \"__v\": 0,\n      \"status\": \"sent\",\n      \"content\": {\n        \"message\": \"this is an emergency message\",\n        \"location\": \"addis ababa\"\n      }\n    },\n    {\n      \"_id\": \"59007ee35f620e347a064ca2\",\n      \"updated_at\": \"2017-04-26T11:05:07.484Z\",\n      \"created_at\": \"2017-04-26T11:05:07.484Z\",\n      \"__v\": 0,\n      \"status\": \"sent\",\n      \"content\": {\n        \"message\": \"this is a request for an emergency service,there is a fire accident.....\",\n        \"location\": \"adama\"\n      }\n    },\n    {\n      \"_id\": \"59007f0f5f620e347a064ca3\",\n      \"updated_at\": \"2017-04-26T11:05:51.311Z\",\n      \"created_at\": \"2017-04-26T11:05:51.311Z\",\n      \"__v\": 0,\n      \"status\": \"sent\",\n      \"content\": {\n        \"message\": \"this is a emmy emergency message,you do not need to continue reading.....\",\n        \"location\": \"hawassa\"\n      }\n    }\n  ],\n  \"total\": 13,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 1\n}",
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
    "url": "/messages/:_id",
    "title": "get a specific message by id",
    "name": "getMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the uique message id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/messages/59007da5eb0e663393eec443",
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
            "description": "<p>Unique message ID</p>"
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
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the body of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"59007da5eb0e663393eec443\",\n  \"updated_at\": \"2017-04-26T10:59:49.447Z\",\n  \"created_at\": \"2017-04-26T10:59:49.447Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\"\n  }\n}",
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
    "url": "/messages/",
    "title": "get all emergency messages",
    "name": "getMessages",
    "group": "Messages",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/messages/",
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
            "description": "<p>Unique message ID</p>"
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
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the body of emergency emergency message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n    \"_id\": \"59007da5eb0e663393eec443\",\n    \"updated_at\": \"2017-04-26T10:59:49.447Z\",\n    \"created_at\": \"2017-04-26T10:59:49.447Z\",\n    \"__v\": 0,\n    \"status\": \"sent\",\n    \"content\": {\n      \"message\": \"this is an emergency message\",\n      \"location\": \"addis ababa\"\n    }\n  },\n  {\n    \"_id\": \"59007ee35f620e347a064ca2\",\n    \"updated_at\": \"2017-04-26T11:05:07.484Z\",\n    \"created_at\": \"2017-04-26T11:05:07.484Z\",\n    \"__v\": 0,\n    \"status\": \"sent\",\n    \"content\": {\n      \"message\": \"this is a request for an emergency service,there is a fire accident.....\",\n      \"location\": \"adama\"\n    }\n  },\n  {\n    \"_id\": \"59007f0f5f620e347a064ca3\",\n    \"updated_at\": \"2017-04-26T11:05:51.311Z\",\n    \"created_at\": \"2017-04-26T11:05:51.311Z\",\n    \"__v\": 0,\n    \"status\": \"sent\",\n    \"content\": {\n      \"message\": \"this is a emmy emergency message,you do not need to continue reading.....\",\n      \"location\": \"hawassa\"\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "delete",
    "url": "/messages/:_id",
    "title": "delete a specific message by id",
    "name": "removeMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique message ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>message recivers service provider or contacts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n  \"_id\": \"58db2ab967abfd211de19e10\",\n  \"updated_at\": \"2017-03-29T03:32:09.522Z\",\n  \"created_at\": \"2017-03-29T03:32:09.522Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\",\n    \"emergency_type\": \"others\"\n  },\n  \"to\": {\n    \"serviceProviders\": [],\n    \"contacts\": []\n  }\n} *",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/send",
    "title": "send an emergency message",
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
          "content": "{\n \"message\":\"this is an emergency message\",\n\"to\":\"+14042815465\",\n \"from\":\"+17187104108 \"\n }",
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
    "title": "paginate profile records",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58f761002bca1817c738eaf5\",\n      \"updated_at\": \"2017-04-19T13:07:12.633Z\",\n      \"created_at\": \"2017-04-19T13:07:12.455Z\",\n      \"user\": {\n        \"_id\": \"58f761002bca1817c738eaf4\",\n        \"updated_at\": \"2017-04-19T13:07:12.523Z\",\n        \"created_at\": \"2017-04-19T13:07:12.321Z\",\n        \"email\": \"biruk@gmail.com\",\n        \"phone_number\": \"+25191397505050\",\n        \"password\": \"$2a$07$uzB9rb5T9AWlXne.CJ90nuqA8pHLbEam6KW5qoxwExj/aaYxNLKB.\",\n        \"staus\": \"active\",\n        \"role\": \"customer\",\n        \"realm\": \"user\"\n      },\n      \"first_name\": \"biruk\",\n      \"last_name\": \"zen\",\n      \"__v\": 0,\n      \"customer\": {\n        \"_id\": \"58f761002bca1817c738eaf6\",\n        \"updated_at\": \"2017-04-19T13:07:12.546Z\",\n        \"created_at\": \"2017-04-19T13:07:12.546Z\",\n        \"profile\": \"58f761002bca1817c738eaf5\",\n        \"emergency_type\": \"select\",\n        \"location\": \"\",\n        \"__v\": 0,\n        \"message\": [],\n        \"Service_provider\": [],\n        \"contact\": []\n      }\n    },\n    {\n      \"_id\": \"58f765702bca1817c738eaf8\",\n      \"updated_at\": \"2017-04-19T13:26:08.333Z\",\n      \"created_at\": \"2017-04-19T13:26:08.320Z\",\n      \"user\": {\n        \"_id\": \"58f765702bca1817c738eaf7\",\n        \"updated_at\": \"2017-04-19T13:28:31.087Z\",\n        \"created_at\": \"2017-04-19T13:26:08.305Z\",\n        \"email\": \"gebeya@gmail.com\",\n        \"phone_number\": \"+25191444494\",\n        \"password\": \"$2a$07$Gwz7flR1KCxfHBwYUO3CZe5iHsp38e2wYZpa2o4OlyjcM0Ahp5sTG\",\n        \"last_login\": \"2017-04-19T13:28:31.086Z\",\n        \"staus\": \"active\",\n        \"role\": \"customer\",\n        \"realm\": \"user\"\n      },\n        ],\n  \"total\": 21,\n  \"limit\": 2,\n  \"page\": 10,\n  \"pages\": 11\n}",
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
    "title": "request a specific user profile by id",
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
          "content": "\nprofiles/58da1ac087f7855c63882eef",
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
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PHONE_NUMBER",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"58da1ac087f7855c63882eef\",\n  \"updated_at\": \"2017-03-29T01:45:25.911Z\",\n  \"created_at\": \"2017-03-28T08:11:44.622Z\",\n  \"user\": {\n    \"_id\": \"58da1ac087f7855c63882eee\",\n    \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n    \"created_at\": \"2017-03-28T08:11:44.605Z\",\n    \"email\": \"jane@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  \"first_name\": \"jane\",\n  \"last_name\": \"doe\",\n  \"__v\": 0,\n  \"customer\": {\n    \"_id\": \"58da1ac087f7855c63882ef0\",\n    \"updated_at\": \"2017-03-28T08:11:44.626Z\",\n    \"created_at\": \"2017-03-28T08:11:44.626Z\",\n    \"profile\": \"58da1ac087f7855c63882eef\",\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n}",
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
    "title": "get all user profiles",
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
      "examples": [
        {
          "title": "Response Example:",
          "content": "  HTTP/1.1 200 OK\n\n[{\n    \"_id\": \"58ff68deff73bc3d41f1dfc1\",\n    \"updated_at\": \"2017-04-25T15:18:55.243Z\",\n    \"created_at\": \"2017-04-25T15:18:54.909Z\",\n    \"user\": {\n      \"_id\": \"58ff68deff73bc3d41f1dfc0\",\n      \"updated_at\": \"2017-04-25T15:36:07.200Z\",\n      \"created_at\": \"2017-04-25T15:18:54.817Z\",\n      \"email\": \"xxx@gmail.com\",\n      \"phone_number\": \"+25191444494\",\n      \"password\": \"$2a$07$6Ae5ZiImrNfVWpFbLGNq2u8J/Y0/AsTtYj4QjHqbd.MmelgT9JLm2\",\n      \"last_login\": \"2017-04-25T15:36:07.200Z\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    },\n    \"first_name\": \"harmony\",\n    \"last_name\": \"fifth\",\n    \"__v\": 0,\n    \"customer\": {\n      \"_id\": \"58ff68dfff73bc3d41f1dfc2\",\n      \"updated_at\": \"2017-04-25T15:18:55.141Z\",\n      \"created_at\": \"2017-04-25T15:18:55.141Z\",\n      \"profile\": \"58ff68deff73bc3d41f1dfc1\",\n      \"__v\": 0,\n      \"emergency_type\": \"select\",\n      \"location\": [],\n      \"message\": [],\n      \"Service_provider\": [],\n      \"contact\": []\n    }\n  }\n]",
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
    "url": "/profiles/:_Id",
    "title": "update a specific user profile",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8001/profiles/5901b5d150c89c16c2f22738\n{\n\t\n\t\"age\":\"25\",\n\t\"country\":\"ethiopia\",\n\t\"state\":\"oromiya\",\n\t\"city\":\"adama\",\n\t\"phone_number\":\"+2514879666\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5901b5d150c89c16c2f22738\",\n  \"updated_at\": \"2017-04-27T09:16:18.154Z\",\n  \"created_at\": \"2017-04-27T09:11:45.458Z\",\n  \"user\": {\n    \"_id\": \"5901b5d150c89c16c2f22737\",\n    \"updated_at\": \"2017-04-27T09:11:45.462Z\",\n    \"created_at\": \"2017-04-27T09:11:45.443Z\",\n    \"email\": \"free@gmail.com\",\n    \"password\": \"$2a$07$Q9XV/qywEbQHMPzTwZF/DOPXosMBz7UkE5RVh5gP/5L3IJ2DRvKqO\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  \"first_name\": \"harmony\",\n  \"last_name\": \"fifth\",\n  \"phone_number\": \"+2514879666\",\n  \"__v\": 0,\n  \"customer\": {\n    \"_id\": \"5901b5d150c89c16c2f22739\",\n    \"updated_at\": \"2017-04-27T09:11:45.463Z\",\n    \"created_at\": \"2017-04-27T09:11:45.463Z\",\n    \"profile\": \"5901b5d150c89c16c2f22738\",\n    \"__v\": 0,\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n  \"age\": 25,\n  \"country\": \"ethiopia\",\n  \"state\": \"oromiya\",\n  \"city\": \"adama\"\n}",
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
    "title": "get ServiceProvider by id",
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
    "title": "Signup User",
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
          "content": " {\n\t\"first_name\":\"teddy\",\n\t\"last_name\":\"baleh\",\n\t\"email\":\"ted@gmail.com\",\n\t\"password\":\"123456\",\n\t\"user_type\":\"customer\",\n\t\"phone_number\":\"+251911121314\"\n }",
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
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
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
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"_id\": \"58da17e487f7855c63882ee5\",\n   \"updated_at\": \"2017-03-28T07:59:32.722Z\",\n   \"created_at\": \"2017-03-28T07:59:32.506Z\",\n   \"email\": \"ted@gmail.com\",\n   \"phone_number\": \"+251911121314\",\n   \"password\": \"$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e\",\n   \"staus\": \"active\",\n   \"role\": \"customer\",\n   \"realm\": \"user\"\n },",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>token generated when user login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>type of key used authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"58da1ac087f7855c63882eee\",\n  \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n  \"created_at\": \"2017-03-28T08:11:44.605Z\",\n  \"email\": \"jane@gmail.com\",\n  \"phone_number\": \"+251911121314\",\n  \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
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
    "title": "User login",
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
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \n \"email\":\"teddy@gmail.com\",\n \"password\":\"123456\"\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n \"token\": \"X0YpTvEhCT9Zv+5nUQDI\",\n \"user\": {\n   \"_id\": \"58d6298c2c774c1d2ddb9865\",\n   \"updated_at\": \"2017-03-25T11:14:36.625Z\",\n   \"created_at\": \"2017-03-25T08:25:48.049Z\",\n   \"email\": \"teddy@gmail.com\",\n   \"staus\": \"active\",\n   \"role\": \"customer\",\n   \"realm\": \"user\"\n }\n}",
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
    "title": "paginate User records",
    "name": "getByPagination",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nlocalhost:8001/users/paginate?page=1&per_page=7",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n    {\n      \"_id\": \"58e1712771d33872bee5610d\",\n      \"updated_at\": \"2017-04-02T21:47:05.450Z\",\n      \"created_at\": \"2017-04-02T21:46:15.316Z\",\n      \"email\": \"steve@gmail.com\",\n      \"phone_number\": \"+25191444494\",\n      \"password\": \"$2a$10$bYfh5Xj1Tt0NM2riSEFRx./fyNJenasaFHhFv6GjV.alBPV/bYV5G\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    },\n    {\n      \"_id\": \"58e1713971d33872bee56110\",\n      \"updated_at\": \"2017-04-02T21:47:24.554Z\",\n      \"created_at\": \"2017-04-02T21:46:33.578Z\",\n      \"email\": \"kyb@gmail.com\",\n      \"phone_number\": \"+25191444494\",\n      \"password\": \"$2a$10$u1SGXL5OIvFiDP41ZPA9X.YMW0dXsWdJqLgDCpVe2fzbtGip6pWLe\",\n      \"staus\": \"active\",\n      \"role\": \"customer\",\n      \"realm\": \"user\"\n    }\n  ],\n  \"total\": 4,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 2\n}",
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
    "title": "request information of a specific user",
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
          "content": "\nusers/58cc05510910cb0ad25c07db",
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
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58de8faca8e95f1cc2ae8220\",\n  \"updated_at\": \"2017-03-31T19:59:47.362Z\",\n  \"created_at\": \"2017-03-31T17:19:40.851Z\",\n  \"email\": \"xyz@gmail.com\",\n  \"phone_number\": \"+251910101011\",\n  \"password\": \"$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
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
    "title": "request information of all users",
    "name": "getUsers",
    "group": "Users",
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
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
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
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58da17e487f7855c63882ee5\",\n    \"updated_at\": \"2017-03-28T07:59:32.722Z\",\n    \"created_at\": \"2017-03-28T07:59:32.506Z\",\n    \"email\": \"ted@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  {\n    \"_id\": \"58da1ac087f7855c63882eee\",\n    \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n    \"created_at\": \"2017-03-28T08:11:44.605Z\",\n    \"email\": \"jane@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  }\n]",
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
    "url": "/users/:_id/logout",
    "title": "logged in user logging out",
    "name": "logout",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>logged in user id</p>"
          },
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
    "url": "/users/:_id/updatePass",
    "title": "change password of a specific user",
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
    "url": "/users/:_Id",
    "title": "update a specific user information",
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
            "description": "<p>User phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t \n\t\"email\":\"xyz@gmail.com\",\n\t\"phone_number\":\"+251910101011\"\n  }",
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
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58de8faca8e95f1cc2ae8220\",\n  \"updated_at\": \"2017-03-31T19:59:39.505Z\",\n  \"created_at\": \"2017-03-31T17:19:40.851Z\",\n  \"email\": \"xyz@gmail.com\",\n  \"phone_number\": \"+251910101011\",\n  \"password\": \"$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  }
] });

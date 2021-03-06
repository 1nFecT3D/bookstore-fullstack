define({ "api": [
  {
    "type": "post",
    "url": "/books",
    "title": "Create book",
    "name": "CreateBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Book's title.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Book's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "author",
            "description": "<p>Book's author.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "publicationDate",
            "description": "<p>Book's publicationDate.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "genre",
            "description": "<p>Book's genre.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "price",
            "description": "<p>Book's price.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>Book's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Book not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/book/index.js",
    "groupTitle": "Book"
  },
  {
    "type": "delete",
    "url": "/books/:id",
    "title": "Delete book",
    "name": "DeleteBook",
    "group": "Book",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Book not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/book/index.js",
    "groupTitle": "Book"
  },
  {
    "type": "get",
    "url": "/books/:id",
    "title": "Retrieve book",
    "name": "RetrieveBook",
    "group": "Book",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>Book's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Book not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/book/index.js",
    "groupTitle": "Book"
  },
  {
    "type": "get",
    "url": "/books",
    "title": "Retrieve books",
    "name": "RetrieveBooks",
    "group": "Book",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "books",
            "description": "<p>List of books.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/book/index.js",
    "groupTitle": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/books/:id",
    "title": "Update book",
    "name": "UpdateBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Book's title.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Book's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "author",
            "description": "<p>Book's author.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "publicationDate",
            "description": "<p>Book's publicationDate.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "genre",
            "description": "<p>Book's genre.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "price",
            "description": "<p>Book's price.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>Book's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Book not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/book/index.js",
    "groupTitle": "Book"
  }
] });

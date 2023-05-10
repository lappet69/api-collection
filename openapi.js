require("dotenv").config();
module.exports = {
  openapi: "3.0.3",
  info: {
    title: "Swagger - OpenAPI 3.0",
    description:
      "\nThis is a sample some API collection based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [https://swagger.io](https://swagger.io). \n\nYou can now help us improve the API whether it's by making changes to the definition itself or to the cod.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nYou can visit my github here [Andre Sinabariba](https://github.com/lappet69/).\n\nThis is the source code [api-collection](https://github.com/lappet69/api-collection)",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "sinabariba.andre@gmail.com",
    },
    version: "1.0.11",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: `${process.env.BASE_URL}/api/v1`,
    },
  ],
  tags: [
    {
      name: "user",
      description: "Operations about user",
    },
    {
      name: "book",
      description: "book collection (coming soon)",
    },
    {
      name: "todo",
      description: "todo list collection (coming soon)",
    },
  ],
  paths: {
    "/user": {
      post: {
        tags: ["user"],
        summary: "Create user",
        description: "This can only be done by the logged in user.",
        operationId: "createUser",
        parameters: [
          {
            name: "email",
            in: "query",
            description: "The user name for login",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "password",
            in: "query",
            description: "The password for login in clear text",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          description: "Created user object",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          default: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  example: {
                    message: "Ok",
                    error: false,
                    code: 200,
                    result: {},
                  },
                },
              },
            },
          },
        },
      },
    },
    "/user/login": {
      post: {
        tags: ["user"],
        summary: "Logs user into the system",
        description: "",
        operationId: "loginUser",
        parameters: [
          {
            name: "email",
            in: "query",
            description: "The user name for login",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "password",
            in: "query",
            description: "The password for login in clear text",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                example: {
                  message: "OK",
                  error: false,
                  code: 200,
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjgzNTM3NTg5LCJleHAiOjE2ODM1NDQ3ODl9.ZaUptoa3WA8RmZSW560capCDagOomd1pPE7oF5ueSAA",
                },
              },
            },
          },
          400: {
            description: "Invalid input password",
            content: {
              "application/json": {
                example: {
                  message: "wrong password",
                  code: 400,
                },
              },
            },
          },
          404: {
            description: "Invalid email",
            content: {
              "application/json": {
                example: {
                  message: "user not found",
                  code: 404,
                },
              },
            },
          },
        },
      },
    },
    "/user/logout": {
      get: {
        tags: ["user"],
        summary: "Logs out current logged in user session",
        description: "",
        operationId: "logoutUser",
        parameters: [],
        responses: {
          default: {
            description: "successful operation",
          },
        },
      },
    },
    "/user/": {
      get: {
        tags: ["user"],
        summary: "Get all users",
        description: "",
        operationId: "getALlUser",
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserResponse",
                },
              },
            },
          },
        },
      },
    },
    "/user/{email}": {
      delete: {
        tags: ["user"],
        summary: "Delete user",
        description: "This can only be done by the logged in user.",
        operationId: "deleteUser",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "The name that needs to be deleted",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                example: {
                  message: "User deleted successfully",
                  code: 200,
                },
              },
            },
          },
          400: {
            description: "Invalid username supplied",
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          fName: {
            type: "string",
            example: "John",
          },
          lName: {
            type: "string",
            example: "James",
          },
          email: {
            type: "string",
            example: "john@email.com",
          },
          password: {
            type: "string",
            example: "12345",
          },
        },
        xml: {
          name: "user",
        },
      },
      Book: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          petId: {
            type: "integer",
            format: "int64",
            example: 198772,
          },
          quantity: {
            type: "integer",
            format: "int32",
            example: 7,
          },
          shipDate: {
            type: "string",
            format: "date-time",
          },
          status: {
            type: "string",
            description: "Order Status",
            example: "approved",
            enum: ["placed", "approved", "delivered"],
          },
          complete: {
            type: "boolean",
          },
        },
        xml: {
          name: "order",
        },
      },
      Tag: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
        },
        xml: {
          name: "tag",
        },
      },
      UserResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Ok",
          },
          error: {
            type: "string",
            example: false,
          },
          code: {
            type: "integer",
            format: "int32",
            example: 200,
          },
          results: {
            type: "object",
            example: [
              {
                fname: "John",
                lname: "Doe",
                email: "john@gmail.com",
              },
              {
                fname: "Vin",
                lname: "Des",
                email: "vindes@gmail.com",
              },
            ],
          },
        },
        xml: {
          name: "##default",
        },
      },
    },
    requestBodies: {
      UserArray: {
        description: "List of user object",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      api_key: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
  },
};

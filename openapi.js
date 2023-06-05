require("dotenv").config();
module.exports = {
  openapi: "3.0.3",
  info: {
    title: "Free API Collection | Swagger- OpenAPI 3.0",
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
  basePath: "/",
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
      description: "book collection",
    },
    {
      name: "todo",
      description: "todo list collection",
    },
    {
      name: "zodiac",
      description:
        "Gives data on Zodiac signs, their personality traits and dates",
    },
  ],
  paths: {
    "/user/create": {
      post: {
        tags: ["user"],
        summary: "Create user",
        description: "This can only be done by the logged in user.",
        operationId: "createUser",
        requestBody: {
          description: "",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
            "application/xml": {
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  email: "email@gmail.com",
                  password: "123",
                },
              },
            },
          },
        },
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
    "/user/delete/{email}": {
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
          404: {
            description: "User not found",
          },
        },
      },
    },
    "/book": {
      get: {
        tags: ["book"],
        summary: "Get all book",
        description: "",
        operationId: "getAllBook",
        responses: {
          default: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  items: {
                    $ref: "#/components/schemas/Book",
                  },
                  example: {
                    id: "3,",
                    title: "book3",
                    author: "roki",
                    desc: "desc book1",
                    amount: null,
                    createdAt: "2022-12-07T08:43:56.711Z",
                    updatedAt: "2022-12-07T08:43:56.711Z",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/book/create": {
      post: {
        tags: ["book"],
        summary: "Create book",
        description: "",
        operationId: "createBook",
        requestBody: {
          description: "",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  title: "newbook",
                  author: "john book",
                  desc: "book description",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                example: {
                  message: "OK",
                  error: false,
                  code: 200,
                  result: {
                    data: "",
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
      },
    },
    "/book/{id}": {
      get: {
        tags: ["book"],
        summary: "Get single book",
        description: "",
        operationId: "getBookById",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            content: {
              "application/json": {
                schema: {
                  example: {
                    message: "Ok",
                    code: 200,
                    result: {
                      id: "3,",
                      title: "book3",
                      author: "roki",
                      desc: "desc book1",
                      amount: null,
                      createdAt: "2022-12-07T08:43:56.711Z",
                      updatedAt: "2022-12-07T08:43:56.711Z",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["book"],
        summary: "Update book",
        description: "",
        operationId: "updateBookById",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  title: "book edited",
                  author: "author edited",
                  description: "desc",
                },
                required: ["title", "author"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "",
            content: {
              "application/json": {
                example: {
                  message: "Ok",
                  code: 200,
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                example: {
                  message: "title and author cannot be null",
                  error: true,
                  code: 400,
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["book"],
        summary: "Delete book",
        description: "This can only be done by the logged in user.",
        operationId: "deleteBook",
        parameters: [
          {
            name: "id",
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
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
          404: {
            description: "Book not found",
          },
        },
      },
    },
    "/todo": {
      get: {
        tags: ["todo"],
        summary: "Get all todo by user logged in",
        description: "",
        operationId: "getAllTodo",
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  items: {
                    $ref: "#/components/schemas/Todo",
                  },
                  example: {
                    message: "Ok",
                    code: 200,
                    result: [
                      {
                        id: 1,
                        task: "task1",
                        date: "2022-12-11",
                        time: null,
                        complete: true,
                        user_id: 12,
                        createdAt: "2022-12-11T09:30:24.644Z",
                        updatedAt: "2022-12-11T09:30:24.644Z",
                      },
                      {
                        id: 2,
                        task: "task2",
                        date: "2023-12-11",
                        time: null,
                        complete: false,
                        user_id: 12,
                        createdAt: "2022-12-11T09:30:24.644Z",
                        updatedAt: "2022-12-11T09:30:24.644Z",
                      },
                    ],
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
    },
    "/todo/create": {
      post: {
        tags: ["todo"],
        security: [
          {
            api_key: [],
          },
        ],
        summary: "Create todo",
        description: "",
        operationId: "createTodo",
        requestBody: {
          description: "",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  task: "newtask",
                  date: "2023-11-11T00:00:00.000Z",
                  time: "11-11-11",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                example: {
                  message: "OK",
                  error: false,
                  code: 200,
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                example: {
                  message: "Task cannot be null",
                  error: true,
                  code: 401,
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
      },
    },
    "/todo/{id}": {
      get: {
        tags: ["todo"],
        summary: "Get single todo",
        description: "",
        operationId: "getTodoById",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            content: {
              "application/json": {
                example: {
                  message: "Ok",
                  code: 200,
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      put: {
        tags: ["todo"],
        summary: "Update todo",
        description: "",
        operationId: "updateTodo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  task: 'todo edited"',
                },
                required: ["title", "author"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "",
            content: {
              "application/json": {
                example: {
                  message: "Ok",
                  code: 200,
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                example: {
                  message: "task cannot be null",
                  error: true,
                  code: 400,
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      patch: {
        tags: ["todo"],
        summary: "Checklist todo",
        description: "",
        operationId: "updateTodo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  complete: true,
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "",
            content: {
              "application/json": {
                example: {
                  message: "Ok",
                  code: 200,
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                example: {
                  message: "title and author cannot be null",
                  error: true,
                  code: 400,
                },
              },
            },
          },
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      delete: {
        tags: ["todo"],
        summary: "Delete todo",
        description: "This can only be done by the logged in user.",
        operationId: "deleteTodo",
        parameters: [
          {
            name: "id",
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
          401: {
            description: "Unauthorized | token expire",
            content: {
              "application/json": {
                example: {
                  message: "Invalid signature",
                  error: true,
                  code: 401,
                },
              },
            },
          },
          404: {
            description: "Book not found",
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
    },
    "/zodiac": {
      get: {
        tags: ["zodiac"],
        summary: "Get all zodiac",
        description: "",
        operationId: "getAllZodiac",
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  example: {
                    message: "OK",
                    error: false,
                    code: 200,
                    result: {
                      Aquarius: {
                        date: "January 20 - February 18",
                        personality:
                          "Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac.",
                      },
                      Aries: {
                        date: "March 21 - April 19",
                        personality:
                          "The first sign of the zodiac, Aries loves to be number one.",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/zodiac/{sign}": {
      get: {
        tags: ["zodiac"],
        summary: "Get single zodiac",
        description: "",
        operationId: "getZodiacSign",
        parameters: [
          {
            name: "sign",
            in: "path",
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
                schema: {
                  example: {
                    message: "OK",
                    error: false,
                    code: 200,
                    result: {
                      sign: "Taurus",
                      date: "April 20 - May 20",
                      personality:
                        "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad param request",
            content: {
              "application/json": {
                example: {
                  error: "Bad param request",
                  statusCode: 400,
                  message:
                    "Please check sign in this list [Aquarius,Aries,Cancer,Capricorn,Gemini,Leo,Libra,Pisces,Sagittarius,Scorpio,Taurus,Virgo]",
                },
              },
            },
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
          fname: {
            type: "string",
            example: "John",
          },
          lname: {
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
          title: {
            type: "string",
            example: "Gede Book",
          },
          author: {
            type: "string",
            example: "John Thor",
          },
          desc: {
            type: "string",
            description: "book description",
            example: "a book that tells about anything",
          },
          amount: {
            type: "integer",
            format: "int32",
            default: null,
          },
        },
        xml: {
          name: "book",
        },
      },
      Todo: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          task: {
            type: "string",
            example: "Do exercise at 5pm",
          },
          date: {
            type: "string",
            format: "date-time",
          },
          complete: {
            type: "boolean",
            example: false,
          },
          user_id: {
            type: "string",
          },
        },
        xml: {
          name: "todo",
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
      BookArray: {
        description: "",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
      },
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

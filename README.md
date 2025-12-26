# Node.js CRUD API with MSSQL

A simple and well-structured RESTful API built using **Node.js**, **Express.js**, and **Microsoft SQL Server** to perform full CRUD operations on user data.

---

## Technology Stack

- **Backend:** Node.js, Express.js  
- **Database:** Microsoft SQL Server  
- **Database Access:** `mssql` package  
- **Configuration:** `dotenv`

---

## Project Structure

node-mssql-crud/
│
├── config/
│ └── db.js # Database connection configuration
│
├── controllers/
│ └── userController.js # Request handling and business logic
│
├── models/
│ └── userModel.js # Database queries
│
├── routes/
│ └── userRoutes.js # API routes
│
├── .env # Environment variables
├── app.js # Application entry point
└── package.json # Dependencies and scripts


---

## Features

- Complete CRUD operations for **User** entity  
- Input validation for required fields and email format  
- Email uniqueness validation  
- Proper error handling using HTTP status codes  
- Environment-based configuration  
- Clean and modular **MVC architecture**

---

## Prerequisites

- Node.js installed  
- Microsoft SQL Server installed and running  
- TCP/IP enabled in SQL Server configuration  

---

## Environment Configuration

The application uses environment variables to configure:

- Application port  
- Database server details  
- Database credentials  

> This approach improves security and makes the application environment-independent.

---

## Running the Application

- Supports **development mode** with automatic restart  
- Supports **production mode**  
- Server runs on the configured local port  

---

## API Endpoints

### Create User
- **Method:** POST  
- **Endpoint:** `/api/users`  
- **Description:** Create a new user  

### Get All Users
- **Method:** GET  
- **Endpoint:** `/api/users`  
- **Description:** Retrieve all users  

### Get User by ID
- **Method:** GET  
- **Endpoint:** `/api/users/:id`  
- **Description:** Retrieve user details by ID  

### Update User
- **Method:** PUT  
- **Endpoint:** `/api/users/:id`  
- **Description:** Update existing user details  

### Delete User
- **Method:** DELETE  
- **Endpoint:** `/api/users/:id`  
- **Description:** Delete a user  

---

## Validation Rules

- **Name:** Required  
- **Email:** Required and must follow valid email format  
- **Email Uniqueness:** Duplicate email entries are not allowed  

---

## Error Handling

The API returns standard HTTP response codes:

- **200** – Success  
- **201** – Resource Created  
- **400** – Validation Error  
- **404** – Resource Not Found  
- **409** – Conflict (Duplicate Email)  
- **500** – Internal Server Error  

---

## Dependencies

- [Express](https://www.npmjs.com/package/express)  
- [MSSQL](https://www.npmjs.com/package/mssql)  
- [dotenv](https://www.npmjs.com/package/dotenv)  


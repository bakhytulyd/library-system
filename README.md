# Library Management

## Project Overview
This project is a backend REST API for a library management system.  
It allows users to:
- Register and login with JWT authentication
- Search books using the Google Books API
- Manage personal resources (reading lists, planned books)
- Perform CRUD operations on user resources
- (Future) Store book rentals and reviews

## Setup and Installation

### 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

### 2. Install dependencies
npm install

### 3. Configure environment variables
Create a `.env` file in the root directory:
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>

### 4. Run the server
npm start
The server will run on `http://localhost:5000`.

---

## API Documentation

### Authentication Routes (Public)

| Method | Endpoint           | Description               |
|--------|------------------|---------------------------|
| POST   | /api/auth/register | Register a new user (hashed password) |
| POST   | /api/auth/login    | Authenticate user and return JWT     |

### User Routes (Private)

| Method | Endpoint             | Description                      |
|--------|--------------------|----------------------------------|
| GET    | /api/users/profile  | Get logged-in user profile       |
| PUT    | /api/users/profile  | Update user profile              |

### Book Routes (Public)

| Method | Endpoint                  | Description                        |
|--------|--------------------------|------------------------------------|
| GET    | /api/books/search?query= | Search books from Google Books API |

### Resource Routes (Private)

| Method | Endpoint                  | Description                  |
|--------|--------------------------|------------------------------|
| POST   | /api/resource            | Create a new resource        |
| GET    | /api/resource            | Get all user resources       |
| GET    | /api/resource/:id        | Get a specific resource      |
| PUT    | /api/resource/:id        | Update a resource            |
| DELETE | /api/resource/:id        | Delete a resource            |

---

## Testing with Postman

1. **Register a new user**  
   - Method: POST  
   - URL: http://localhost:5000/api/auth/register  
   - Body (JSON):
{
  "username": "Dias",
  "email": "dias@example.com",
  "password": "123456"
}

2. **Login**  
   - Method: POST  
   - URL: http://localhost:5000/api/auth/login  
   - Body (JSON):
{
  "email": "dias@example.com",
  "password": "123456"
}
   - Response includes a JWT token. Use it for all private routes in `Authorization: Bearer <token>` header.

3. **Create a Resource**  
   - Method: POST  
   - URL: http://localhost:5000/api/resource  
   - Header: Authorization: Bearer <token>  
   - Body (JSON):
{
  "title": "Read Harry Potter",
  "description": "Plan to read all 7 books this year"
}

4. **Get All Resources**  
   - Method: GET  
   - URL: http://localhost:5000/api/resource  
   - Header: Authorization: Bearer <token>

5. **Update a Resource**  
   - Method: PUT  
   - URL: http://localhost:5000/api/resource/:id  
   - Header: Authorization: Bearer <token>  
   - Body (JSON):
{
  "title": "Read Harry Potter Series",
  "description": "Completed 3 books"
}

6. **Delete a Resource**  
   - Method: DELETE  
   - URL: http://localhost:5000/api/resource/:id  
   - Header: Authorization: Bearer <token>

---

## Error Handling

- Returns appropriate HTTP status codes:
  - 400 Bad Request
  - 401 Unauthorized
  - 404 Not Found
  - 500 Internal Server Error
- Error messages are returned in JSON format:
{
  "message": "Invalid credentials"
}

---

## Future Features
- Book rentals and reviews
- Persist Google Books API data in the database
- Improve validation using Joi or Validator.js

# Natours API

A RESTful API for managing tours and users built with Node.js, Express, and MongoDB.

## Features

- RESTful API design
- MVC architecture pattern
- File-based data storage (JSON)
- Input validation middleware
- Error handling

## API Endpoints

### Tours
- `GET /api/v1/tours` - Get all tours
- `GET /api/v1/tours/:id` - Get tour by ID
- `POST /api/v1/tours` - Create new tour (requires name and price)
- `PATCH /api/v1/tours/:id` - Update tour
- `DELETE /api/v1/tours/:id` - Delete tour

### Users
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create new user
- `PATCH /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd natours-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The server will start on port 3001.

## Project Structure

```
├── app.js              # Express app setup & middleware
├── server.js           # Server startup
├── Routes/
│   ├── tourRoutes.js   # Tour route definitions
│   └── userRoutes.js   # User route definitions
├── Controllers/
│   ├── tourController.js # Tour business logic
│   └── userController.js # User business logic
└── dev-data/
    └── data/
        ├── tours-simple.json
        └── users.json
```

## Technologies Used

- Node.js
- Express.js
- Morgan (HTTP request logger)
- File System (fs) for data persistence

## Development

- Run with nodemon for development: `npm start`
- Run directly with Node: `node server.js`

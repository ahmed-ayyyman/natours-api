# Natours API

A RESTful API for managing tours and users built with Node.js, Express, and MongoDB.

## Features

- RESTful API design with MVC architecture
- Environment-based configuration (development/production)
- File-based data storage (JSON)
- Input validation middleware
- Error handling
- Static file serving
- Request logging (Morgan)
- Environment variables support

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
git clone https://github.com/ahmed-ayyyman/natours-api.git
cd natours-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `config.env` file in the root directory:
```env
NODE_ENV=development
PORT=8000
USER=YourName
PASSWORD=YourPassword
```

4. Start the server:

**Development mode:**
```bash
npm run start:dev
```

**Production mode:**
```bash
npm run start:prod
```

The server will start on the port specified in your `config.env` file (default: 8000 for production, 3001 for development).

## Project Structure

```
├── app.js              # Express app setup & middleware
├── server.js           # Server startup with environment config
├── config.env          # Environment variables
├── Routes/
│   ├── tourRoutes.js   # Tour route definitions
│   └── userRoutes.js   # User route definitions
├── Controllers/
│   ├── tourController.js # Tour business logic
│   └── userController.js # User business logic
├── public/             # Static files (CSS, images, HTML)
└── dev-data/
    └── data/
        ├── tours-simple.json
        └── users.json
```

## Environment Configuration

The application supports different environments:

- **Development**: Uses Morgan logging, port 3001 (fallback)
- **Production**: Minimal logging, uses PORT from config.env

## Middleware Features

- **Request logging**: Morgan middleware (development only)
- **Body parsing**: JSON request body parsing
- **Static files**: Serves static files from `/public` directory
- **Custom middleware**: Request time tracking
- **Parameter validation**: ID parameter validation for tours
- **Body validation**: Name and price validation for tour creation

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Morgan** - HTTP request logger
- **Dotenv** - Environment variable management
- **Nodemon** - Development server with auto-restart
- **File System (fs)** - Data persistence

## Development

- **Development server**: `npm run start:dev` (with nodemon)
- **Production server**: `npm run start:prod` (with environment variables)
- **Auto-restart**: Nodemon watches for file changes and restarts automatically

## API Testing

Test the API endpoints using curl or a tool like Postman:

```bash
# Get all tours
curl http://localhost:8000/api/v1/tours

# Get a specific tour
curl http://localhost:8000/api/v1/tours/1

# Create a new tour
curl -X POST http://localhost:8000/api/v1/tours \
  -H "Content-Type: application/json" \
  -d '{"name":"New Tour","price":299}'
```

## Data Storage

The application currently uses JSON files for data storage:
- `dev-data/data/tours-simple.json` - Tour data
- `dev-data/data/users.json` - User data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License

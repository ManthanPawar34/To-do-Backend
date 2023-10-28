# Backend TODO App

This is a simple backend application for managing tasks and users, providing CRUD (Create, Read, Update, Delete) operations through two main routes: `/user` and `/task`.

## Getting Started

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file and configure your database connection.
4. Start the server with `npm start`.

## API Endpoints

### User Routes

- **POST /user/new**: Register a new user.
- **POST /user/login**: Log in with a registered user.
- **GET /user/me**: Retrieve the currently logged-in user's profile.
- **GET /user/logout**: Log out the currently logged-in user.

### Task Routes

- **POST /task/new**: Create a new task (authentication required).
- **GET /task/my**: Retrieve tasks assigned to the currently logged-in user (authentication required).
- **PUT /task/:id**: Update an existing task (authentication required).
- **DELETE /task/:id**: Delete a task (authentication required).

## Environment Variables

To set up your environment, create a `.env` file with the following variables:


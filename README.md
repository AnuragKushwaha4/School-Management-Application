# School Management API

A RESTful API built with **Node.js, Express.js, and MySQL** to manage school data.
This API allows users to add schools and retrieve a list of schools sorted by proximity to a given geographical location.

## Features

* Add a new school to the database
* Retrieve schools sorted by distance from user location
* Input validation and centralized error handling
* MySQL database integration
* Deployed backend using Railway
* API testing using Postman

## Tech Stack

* **Node.js**
* **Express.js**
* **MySQL**
* **Railway (Deployment)**
* **Postman (API Testing)**

## Project Structure

```
school management
├── controllers
│   └── schoolControllers.js
│
├── routes
│   └── schoolRoutes.js
│
├── Configs
│   └── schoolDB.js
│
├── server.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
```

Install dependencies:

```
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000

MYSQLHOST=localhost
MYSQLUSER=root
MYSQLPASSWORD=yourpassword
MYSQLDATABASE=school_management
MYSQLPORT=3306
```

## Database Setup

Create the `schools` table in MySQL:

```
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

## Running the Server

Start the server:

```
npm start
```

or

```
node server.js
```

Server will run on:

```
http://localhost:3000
```

## API Endpoints

### Add School

**POST**

```
/api/addSchool
```

Request Body:

```
{
  "name": "Delhi Public School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

Response:

```
{
  "message": "School added successfully",
  "schoolId": 1
}
```

---

### List Schools

**GET**

```
/api/listSchools
```

Query Parameters:

```
latitude
longitude
```

Example:

```
/api/listSchools?latitude=28.6&longitude=77.2
```

Response:

Schools sorted by distance from the provided location.

## Deployment

The backend is deployed using **Railway**.

## Testing

APIs were tested using **Postman**.

## Author

Anurag Kushwaha

🚘 Interactive Car Database

A JavaScript MVC application for managing a datbase of cars with full CRUD functionality from the website. The website will require a login to function. 

📋 Table of Contents

Overview

Tech Stack

Architecture

Features

Installation

Usage

Database Schema

Project Structure

Future Enhancements

Contributing

License

📖 Overview

This project is a JavaScript-based application built using the MVC (Model-View-Controller) pattern.
It allows users to interact with a database of cars, including creating, viewing, and deleting car records. Car records will include year of production, make, country of origin for brand, model, body style, trim levels, engine options, power specification of each engine option, transmission options, drivetrain options, available colors, wheelbase, country of production, domestic markets(markets the car was sold in originally), and driver seat position availability(whether the vehicle was produced in left-hand drive, and/or right-hand drive). 

The goal of this project is to maintain clean separation of concerns, scalable architecture, and readable code. 

🛠 Tech Stack

BACKEND:

Node.js – JavaScript runtime environment

Express.js – Web framework for routing and server logic

DATABASE:

MySQL – Relational database for storing car data

Sequelize – Promise-based ORM for database modeling and queries

mysql2 – MySQL client for Node.js

AUTHENTIFICATION & SESSIONS:

bcrypt – Password hashing for secure authentication

express-session – Session management middleware

connect-session-sequelize – Persistent session storage using Sequelize

VIEW LAYER:

Express Handlebars – Templating engine for rendering dynamic views

CONFIGURATION & UTILITIES:

dotenv – Environment variable management

SCRIPTS:

npm start – Starts the application server

npm run seed – Seeds the database with initial car data

🧠 ARCHITECTURE:

This project follows the MVC architecture:

MODEL:
Handles database logic and data validation for cars.

VIEW:
Responsible for rendering the UI and displaying car data.

CONTROLLER:
Acts as the traffic cop between Models and Views, processing requests and returning responses.

✨ Features

View all cars in the database

Add a new car

Update existing car information

Delete cars

Structured MVC codebase

RESTful routes

⚙️ Installation

Clone the repository:

git clone https://github.com/Zachary-Rossman/Cars


Navigate into the project:

cd Cars


Install dependencies:

npm install


Configure environment variables:

cp .env.example .env


Update database credentials in .env.

Start the application:

npm start

▶️ Usage

Once the server is running, open your browser and navigate to:

http://localhost:3001


Use the interface to manage cars in the database.

🗄 Database Schema

Car

Field - Type - Description
id - Integer - Primary key
year - Integer - Year of production
make - String - Manufacturer
model - String - Model name
body_style - String - Body style (sedan, coupe, SUV, etc.)
trim - String - Trim level
brand_origin_country - String - Country of origin of the brand
production_country - String - Country where the vehicle was produced
wheelbase - Decimal - Wheelbase measurement
available_exterior_colors - Text / JSON - Available exterior color options
available_interior_colors - Text / JSON - Available interior color options
transmission_options - Text / JSON - Available transmission types, manual, automatic, or CVT
engine_options - Text / JSON - Available engine configurations
engine_power_specs - Text / JSON - Power output for each engine option
domestic_markets - Text / JSON - Markets where the car was originally sold
drive_orientation - String - Left-hand drive, right-hand drive, or both

(Adjust fields as needed.)

📁 Project Structure
/
├── config/
    └── connections.js
├── controllers/
    └── api/
        └── carRoutes.js
            index.js
    └── homeRoutes.js
        index.js
├── db/
    └── schema.sql
├── models/
│   └── Car.js
        index.js
├── public/
    └── css/
    └── js/
        └── login.js
            logout.js
├── seeds/
    └── carData.json
        seeds.js
├── utils/
    └── auth.js
        helpers.js
├── views/
│   └── layouts
        └── main.handlebars
        homepage.handlebars
        login.handlebars
├── .env
├── .gitignore
├── LICENSE
├── package.json
└── README.md
├── server.js

🚀 Future Enhancements

User authentication

Advanced search and filtering

Image uploads for cars

API documentation

Pagination and sorting

🤝 Contributing

Contributions are welcome.
Please fork the repository and submit a pull request with clear descriptions of changes.

📄 License

This project is licensed under the MIT License.
# Journal App

A simple journal web application built to practice full CRUD (Create, Read, Update, Delete) operations with a backend API and MongoDB database.

---

## Features

- Add new journal entries
- View all journal entries
- Edit existing entries
- Delete entries
- Data persistence using MongoDB
- RESTful API built with Express.js
- Frontend form handling with JavaScript and Fetch API

---

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM

---

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/journal-app.git
   cd journal-app

2. Install dependencies

- npm install

3. Set up environment variables

- Create a .env file in the root directory and add your MongoDB connection string:
- MONGO_URI=your_mongodb_connection_string
- PORT=8000

4. Start the server

- npm start

5. Open the frontend

- Use Live Server or open index.html in your browser to start using the app.

## Usage

- Use the form on the homepage to create new journal entries.
- Entries will be saved in the MongoDB database.
- Click edit to update an entry.
- Click delete to remove an entry.

## Folder Structure

journal-app/
│
├── public/            # Frontend files (HTML, CSS, JS)
├── routes/            # Express route handlers
├── controllers/       # Request handlers logic
├── models/            # Mongoose schemas and models
├── db/                # Database connection files
├── server.js          # Main server file
└── README.md          # This file

## Future Improvements

- Add user authentication
- Implement pagination for entries
- Add rich text editor for journal entries
- Deploy to cloud hosting (Heroku, Vercel, etc.)

License
MIT © [Karim Youssef]

Contact
Feel free to reach out if you have questions or feedback!

Email: karimm.youssef05@gmail.com

GitHub: Karim648

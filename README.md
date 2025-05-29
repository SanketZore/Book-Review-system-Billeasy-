
# 📚 Book Review API

A simple RESTful API for a Book Review System built using **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.


## ✅ Features

- User Registration and Login
- JWT-based Authentication
- Add, View, Search Books
- Submit, Update, Delete Reviews
- Pagination and Filtering Support

---

## 🛠 Tech Stack

- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Auth: JWT, bcrypt
- Environment Config: dotenv

---

## 📁 Folder Structure

```
book-review-api/
│
├── config/              # MongoDB connection
├── controllers/         # Route logic
├── middlewares/         # Auth and error middleware
├── models/              # Mongoose schemas
├── routes/              # API route definitions
├── .env                 # Environment variables
├── .gitignore
├── package.json
├── server.js            # Entry point
└── README.md
```

---

## ⚙️ Project Setup Instructions

```bash
# Clone repository
git clone https://github.com/your-username/book-review-api.git
cd book-review-api

# Install dependencies
npm install express mongoose dotenv jsonwebtoken bcryptjs cors

# Install development dependencies
npm install --save-dev nodemon

# Create a .env file
touch .env
```

### .env Example
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookreviewdb
JWT_SECRET=your_jwt_secret
```

---

## ▶️ How to Run Locally

```bash
# Start development server
npm run dev

# Or run manually
node server.js
```

### Add to `package.json`:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🔗 API Endpoints (with Examples)

### 🧑 Auth
- **POST** `/api/auth/signup`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
```bash
curl -X POST http://localhost:5000/api/auth/signup \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","password":"123456"}'
```

- **POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

### 📚 Books
- **GET** `/api/books?page=1&limit=10&author=James&genre=Self-help`

- **POST** `/api/books` (JWT Required)
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help"
}
```
```bash
curl -X POST http://localhost:5000/api/books \
-H "Authorization: Bearer <your_token>" \
-H "Content-Type: application/json" \
-d '{"title":"Atomic Habits","author":"James Clear","genre":"Self-help"}'
```

- **GET** `/api/books/:id`

- **GET** `/api/books/search?q=atomic`

---

### ✍️ Reviews
- **POST** `/api/books/:id/reviews` (JWT Required)
```json
{
  "rating": 5,
  "comment": "Great book!"
}
```

- **PUT** `/api/reviews/:reviewId` (JWT Required)
```json
{
  "rating": 4,
  "comment": "Updated comment"
}
```

- **DELETE** `/api/reviews/:reviewId` (JWT Required)

---

## 🧠 Design Decisions & Assumptions

- **Only authenticated users** can add books or post reviews.
- Each user can **review a book only once**.
- Book search is **partial and case-insensitive** (using regex).
- Reviews and users are related via **MongoDB references (ObjectId)**.

---

## 🧾 Database Schema

### 🔐 User
```js
{
  name: String,
  email: String (unique),
  password: String (hashed)
}
```

### 📚 Book
```js
{
  title: String,
  author: String,
  genre: String,
  createdBy: ObjectId (ref to User)
}
```

### ✍️ Review
```js
{
  book: ObjectId (ref to Book),
  user: ObjectId (ref to User),
  rating: Number (1–5),
  comment: String
}
```

> **Note:** You can create an ER diagram for better visualization (optional).

---

## 📬 Contact

Name- Sanket Zore
Mobile No- 9769957469
Email- sanketzore348@gmail.com


# 📸 Memories App

A simple full-stack **MERN** application for creating, storing, and sharing memories.
Built with **MongoDB, Express, React, and Node.js**.

---

## 🚀 Features

* Create new memories with title, message, and image
* Upload images (stored as base64)
* View a list of all memories
* Like posts to show appreciation
* Responsive design for web

---

## 🛠️ Tech Stack

**Frontend**

* React
* Redux & Redux Thunk
* Axios
* Moment.js

**Backend**

* Node.js
* Express.js
* Mongoose (MongoDB ODM)
* CORS, Body-Parser

---

## 📂 Project Structure

```
Memories-App/
│── client/   # React frontend
│── server/   # Express backend
│── package.json
│── README.md
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hiruy72/Memories-App.git
cd Memories-App
```

### 2. Install dependencies

**Backend (server):**

```bash
cd server
npm install
```

**Frontend (client):**

```bash
cd ../client
npm install
```

### 3. Run the app

**Backend:**

```bash
npm start
```

**Frontend:**

```bash
npm start
```

---

## 🌐 API Endpoints (server)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/posts`     | Get all posts     |
| POST   | `/posts`     | Create a new post |
| PATCH  | `/posts/:id` | Update a post     |
| DELETE | `/posts/:id` | Delete a post     |

---




## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 📜 License

This project is licensed under the **MIT License**.

---

# Learn CICD Project

This repository contains both the **React frontend** and **Node.js backend** for the Learn CICD project.

---

## 📁 Project Structure

```
/frontend   - React app built with Vite
/backend    - Node.js backend API server using Express
```

---

## ⚙️ Setup & Run Locally

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open your browser at `http://localhost:5173`

---

### 2. Backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:5000`

---

## 📦 Docker Setup

### Build and run frontend container

```bash
docker build -t react-frontend ./frontend
docker run -p 3000:3000 react-frontend
```

### Build and run backend container

```bash
docker build -t node-backend ./backend
docker run -p 5000:5000 node-backend
```

---

## 🔗 Connecting Frontend and Backend

The frontend fetches data from the backend API at `http://localhost:5000/api/...`

Make sure both containers/services are running for full functionality.

---

## 🛠️ Technologies Used

* React with Vite
* Node.js with Express
* Docker for containerization

---

## 📩 Contact

For any questions or help, reach out to Suraj Ghimire.
email: surajghimire13579@gmail
linkedin: https://www.linkedin.com/in/suraj-ghimire-30b051225/
instagram: https://www.instagram.com/lsuraj_ghimirel

---
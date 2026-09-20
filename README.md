# 🚀 Taskflow 

A full-stack MERN web application built to manage tasks efficiently. This project features a robust backend API and a responsive frontend dashboard.

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- CSS3 / Tailwind CSS
- Axios (for API requests)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- JSON Web Tokens (JWT) for Authentication

---

## ⚙️ Prerequisites

Before running this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org) (v16.x or higher)
- [MongoDB Community Server](https://mongodb.com) installed and running locally on your device
- Optional: [MongoDB Compass](https://mongodb.com) (GUI to view your local database)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Clone the Repository
```bash
git clone <PASTE_YOUR_GITHUB_REPOSITORY_URL_HERE>
cd taskflow
```

### 2. Set Up the Backend Environment
Create a `.env` file inside the `Server/` directory and add the following connection variables:
```env
secret_key=integer
mongodb_url=mongodb://localhost:27017/taskflow_db
secret=A_String
```

### 3. Install Dependencies & Run the Server
Open your terminal, navigate to the `Server` directory, install packages, and start the development server:
```bash
cd Server
npm install
npm run dev
```

### 4. Install Frontend Dependencies & Run the Client
Open a *second* terminal window, ensure you are in the **root project directory**, install the frontend packages, and start Vite:
```bash
npm install
npm run dev
```

Your app should now be running locally at `http://localhost:5173`!

---

## 🌟 Features

- **User Authentication:** Secure Login and Registration system using JWT.
- **Task Management:** Create, update, view, and delete tasks dynamically.
- **Profile Customization:** Users can upload profile pictures (stored securely in local directories).
- **Responsive Design:** Clean sidebar layout optimized for desktop and mobile viewports.

---

## 📂 Project Structure

```text
Taskflow/
├── Server/           # Express & Node.js backend
│   ├── config/       # Database & environment configurations
│   ├── controllers/  # Route logic handlers
│   ├── middlewares/  # Authentication & safety logic
│   └── profile_pic/  # Local storage for user profile photos
└── src/              # React frontend source files
    ├── assets/       # Static global media assets
    └── components/   # UI Layout (Login, Dashboard, Todo, Sidebar)
```

---

## 📈 Future Features

- **Sorting Options:** Users will have options to sort tasks based on priority, completion status, or expected completion time.
- **Delete Confirmation:** Adding a professional modal prompt asking users to confirm before permanently deleting a task.

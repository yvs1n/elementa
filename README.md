# rephysics ⚛️

A premium, modern educational platform for Edexcel IGCSE Physics students. Featuring account-linked progress tracking, video-based learning, and a comprehensive past paper library.

![Project Status](https://img.shields.io/badge/Status-In--Development-blue)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20SQLite%20%7C%20Vanilla%20JS-success)

## ✨ Features

- **Personalized Dashboard**: Real-time "Watch Progress" and account-linked greetings.
- **Video Library**: Intelligent duration loading and progress saving.
- **Past Paper Vault**: Organized repository of Question Papers and Marking Schemes.
- **Premium UI**: Dark-mode optimized, glassmorphism design with a full-screen mobile navigation system.
- **Account Sync**: History and progress are stored securely on the server.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, Tailwind CSS (CDN), Material Symbols.
- **Backend**: Node.js, Express.
- **Database**: SQLite3 (with persistence optimized for production).
- **Authentication**: JWT (JSON Web Tokens) with Secure HTTP-Only Cookies.

## 🚀 Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yvs1n/rephysics.git
   cd rephysics
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Initialize the Database**:
   ```bash
   node setupDB.js
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```
   *Access the site at `http://localhost:3000`*

## 📦 Deployment

Optimized for deployment on **Railway.app** or **Render.com** using Persistent Volumes for the SQLite database.

---
*Created with ❤️ by [Yassin Ragab](https://yassinr.me)*

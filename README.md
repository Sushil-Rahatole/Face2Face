# 📞 Face2Face – Real-Time Video Chat App

**Face2Face** is a powerful, modern web application that enables real-time video calling, group chat, and screen sharing — all through the browser! It’s built using WebRTC and Socket.IO, allowing multiple users to connect, chat, and collaborate without needing to install anything.

---

## 🚀 Features

- ✅ **Multi-User Video Calling** – Join a room and instantly connect with multiple participants  
- 💬 **Real-Time Chat** – Send text messages while in the call  
- 🖥️ **Screen Sharing** – Easily share your screen during meetings  
- 🔒 **No Installation Needed** – Just share a link and start talking  
- 🌐 **Room-Based System** – Create private or public rooms dynamically  
- ⚡ **Fast and Lightweight** – Built with performance and ease of use in mind

---

## 🛠️ Tech Stack

| Frontend      | Backend         | Real-Time Communication |
|---------------|------------------|--------------------------|
| React.js      | Node.js + Express | WebRTC + Socket.IO       |

---

## 📁 Project Structure

face2face/<br>
│<br>
├── backend/<br>
│ └── src/<br>
│ └── app.js # Express server with signaling logic<br>
│<br>
├── frontend/<br>
│ └── src/<br>
│ └── App.js # React client entry point<br>


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/face2face.git
cd face2face

cd backend
npm install
npm run dev

# Backend will run on http://localhost:8000

cd frontend
npm install
npm start

# Frontend will run on http://localhost:3000
```

### 2. Setup .env file

i. create a .env file inside /backend
ii. Inside that add :  DATABASE_URL=YOUR_MONGO_DB_URL

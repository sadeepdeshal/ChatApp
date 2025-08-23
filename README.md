# Talksy 💬  

Talksy is a real-time chat application built with the MERN stack. It allows users to communicate instantly with secure authentication, a clean UI, and seamless real-time updates powered by WebSockets.  

## 🚀 Features  
- 🔑 **User Authentication** (Sign up / Login / JWT sessions)  
- 👥 **1-on-1 Chat** with real-time messaging  
- 🟢 **Online/Offline User Status**      
- 💾 **Persistent Conversations** stored in the database  

## 🛠️ Tech Stack  
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Real-time Communication:** Socket.IO  
- **Authentication:** JWT + bcrypt  

## ⚙️ Installation & Setup  

### 1. Clone the repository  
```bash
git clone https://github.com/sadeepdeshal/Talksy.git
cd Talksy
```

### 2. Setup 

Setup Backend  
```bash
cd backend
npm install
```
Create a `.env` file inside `backend/` and add:  
```env
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```
Run backend:  
```bash
npm start
```

Setup Frontend  
```bash
cd ../frontend
npm install
npm start
```

### 3. Alternative way

Build the app
```bash
npm run build
```
Start the app
```bash
npm start
```

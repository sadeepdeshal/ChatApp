# Talksy 💬  

Talksy is a real-time chat application built with the MERN stack. It allows users to communicate instantly with secure authentication, a modern UI, and seamless real-time updates powered by WebSockets.  

## 🚀 Features  
- 🔑 **User Authentication** (Sign up / Login / JWT sessions)  
- 👥 **1-on-1 Chat** with real-time messaging  
- 🟢 **Online/Offline User Status**  
- 📱 **Modern Glass-morphism UI** with responsive design
- 🎨 **Dark/Light Theme Support**
- �️ **Profile Picture Upload** via Cloudinary
- �💾 **Persistent Conversations** stored in the database  

## 🛠️ Tech Stack  
- **Frontend:** React, Vite, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Real-time Communication:** Socket.IO  
- **Authentication:** JWT + bcrypt
- **File Upload:** Cloudinary
- **State Management:** Zustand
- **Deployment:** Vercel

## 🌐 Live Demo
[View Live Application](https://your-app-name.vercel.app) _(Update with your actual URL)_

## 📖 Deployment Guide
For complete deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## ⚙️ Local Development Setup  

### 1. Clone the repository  
```bash
git clone https://github.com/sadeepdeshal/Talksy.git
cd Talksy
```

### 2. Backend Setup  
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
npm run dev
```

### 3. Frontend Setup  
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

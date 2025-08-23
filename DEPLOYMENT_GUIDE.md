# Talksy - Complete Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository with your Talksy code
- MongoDB Atlas database (free tier available)
- Cloudinary account for image uploads

## Step 1: Prepare Your Code

### 1.1 Update Backend CORS Configuration
In `backend/src/index.js`, update the CORS configuration:
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://your-app-name.vercel.app"] // Replace with your actual domain
    : "http://localhost:5173",
  credentials: true,
}));
```

### 1.2 Verify Frontend API Configuration
In `frontend/src/lib/axios.js`, ensure:
```javascript
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});
```

## Step 2: Environment Variables Setup

### 2.1 Backend Environment Variables
Create these environment variables in Vercel:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `JWT_SECRET` - A secure random string (32+ characters)
- `CLOUDINARY_CLOUD_NAME` - From your Cloudinary dashboard
- `CLOUDINARY_API_KEY` - From your Cloudinary dashboard
- `CLOUDINARY_API_SECRET` - From your Cloudinary dashboard
- `NODE_ENV` - Set to "production"
- `PORT` - Set to "5001"

### 2.2 MongoDB Atlas Setup
1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Go to Database Access → Add Database User
4. Go to Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
5. Go to Database → Connect → Connect your application
6. Copy the connection string and replace `<password>` with your user password

### 2.3 Cloudinary Setup
1. Go to https://cloudinary.com and create account
2. Dashboard will show your Cloud Name, API Key, and API Secret
3. Copy these values for environment variables

## Step 3: Deploy to Vercel

### 3.1 Deploy via GitHub (Recommended)
1. Push your code to GitHub repository
2. Go to https://vercel.com and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.2 Environment Variables in Vercel
1. In your Vercel project dashboard, go to "Settings" → "Environment Variables"
2. Add all the environment variables from Step 2.1
3. Make sure to set them for "Production", "Preview", and "Development"

### 3.3 API Routes Configuration
Vercel will automatically detect the `vercel.json` file and configure:
- Frontend build from the `frontend` directory
- API routes from the `api` directory
- Proper routing for both frontend and backend

## Step 4: Deployment Configuration Files

### 4.1 vercel.json (already created)
```json
{
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/dist/$1"
    }
  ],
  "functions": {
    "api/index.js": {
      "maxDuration": 30
    }
  }
}
```

### 4.2 api/index.js (already created)
This file serves as the serverless function entry point for your backend.

## Step 5: Deploy and Test

### 5.1 Deployment
1. Click "Deploy" in Vercel dashboard
2. Wait for build to complete (usually 2-3 minutes)
3. Vercel will provide you with a URL like `https://your-app-name.vercel.app`

### 5.2 Update CORS with Actual Domain
1. After deployment, update the CORS configuration in `backend/src/index.js`:
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://your-actual-domain.vercel.app"] // Replace with your actual domain
    : "http://localhost:5173",
  credentials: true,
}));
```
2. Commit and push changes to trigger a new deployment

### 5.3 Testing Checklist
- [ ] Homepage loads correctly
- [ ] User registration works
- [ ] User login works
- [ ] Sending messages works
- [ ] Real-time messaging works
- [ ] Profile picture upload works
- [ ] Theme switching works

## Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain
1. In Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Update CORS configuration with your custom domain

## Step 7: Monitoring and Maintenance

### 7.1 Monitor Functions
- Check Vercel dashboard for function logs
- Monitor for any timeout or memory issues
- Check MongoDB Atlas for connection issues

### 7.2 Environment Variables Security
- Never commit `.env` files to Git
- Regularly rotate JWT secrets
- Monitor Cloudinary usage

## Troubleshooting Common Issues

### Backend Issues
- **500 Error**: Check MongoDB connection string and credentials
- **CORS Error**: Verify frontend domain in CORS configuration
- **Function Timeout**: Check if database operations are taking too long

### Frontend Issues
- **Build Failed**: Check for TypeScript/ESLint errors
- **API Calls Failing**: Verify API base URL configuration
- **Assets Not Loading**: Check build output directory

### Socket.io Issues
Note: Real-time features may need additional configuration for production. Consider using Socket.io with Redis adapter for scaling.

## Success! 🎉
Your Talksy chat application should now be live on Vercel. Share the URL with friends and start chatting!

## Next Steps
- Set up monitoring with tools like LogRocket or Sentry
- Implement rate limiting for API endpoints
- Add Redis for better Socket.io scaling
- Set up automated backups for MongoDB
- Implement CI/CD for automated testing and deployment

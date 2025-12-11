# Backend Deployment Guide - Render

This guide will walk you through deploying the Axentrixx backend API to Render.

## Prerequisites

- [x] GitHub account
- [x] Render account (sign up at https://render.com)
- [x] Backend code pushed to GitHub repository
- [x] MongoDB Atlas database (already configured)

## Step 1: Push Code to GitHub

If you haven't already, push your backend code to GitHub:

```bash
# Navigate to your backend directory
cd "c:\Users\niraj\Desktop\PRODUCTION STARTUP\AXENTRIXX\backend"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare backend for Render deployment"

# Add remote and push (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/axentrixx-backend.git
git push -u origin main
```

## Step 2: Create Render Account

1. Go to https://render.com
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with GitHub (recommended for easy integration)

## Step 3: Create New Web Service

1. From Render Dashboard, click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository:
   - Click **"Connect account"** if not already connected
   - Find and select your backend repository
   - Click **"Connect"**

## Step 4: Configure Web Service

Fill in the following settings:

### Basic Settings
- **Name**: `axentrixx-backend` (or your preferred name)
- **Region**: Choose closest to your users (e.g., Oregon, Frankfurt)
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (or `backend` if deploying from monorepo)
- **Runtime**: **Node**
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Instance Type
- Select **"Free"** plan (sufficient for testing)

> [!WARNING]
> Free tier instances spin down after 15 minutes of inactivity and may take 30-60 seconds to restart on first request.

## Step 5: Configure Environment Variables

Click **"Advanced"** and add the following environment variables:

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_ENV` | `production` | Required |
| `PORT` | `5000` | Optional (Render auto-assigns) |
| `MONGODB_URI` | `your-mongodb-connection-string` | **IMPORTANT: Use your actual MongoDB Atlas URI** |
| `SMTP_HOST` | `smtp.gmail.com` | Email service |
| `SMTP_PORT` | `587` | Email port |
| `SMTP_SECURE` | `false` | TLS setting |
| `SMTP_USER` | `your-email@gmail.com` | **Your actual email** |
| `SMTP_PASS` | `your-app-password` | **Gmail app-specific password** |
| `CONTACT_EMAIL` | `contact@axentrixx.com` | Recipient email |
| `SALES_EMAIL` | `sales@axentrixx.com` | Recipient email |
| `HR_EMAIL` | `hr@axentrixx.com` | Recipient email |
| `TEAM_EMAIL` | `team@axentrixx.com` | Recipient email |
| `COMPANY_NAME` | `Axentrixx` | Company info |
| `COMPANY_PHONE` | `+1 (555) 123-4567` | Company info |
| `COMPANY_ADDRESS` | `San Francisco, CA` | Company info |
| `FRONTEND_URL` | `https://your-vercel-app.vercel.app` | **Update after frontend deployment** |

> [!IMPORTANT]
> **MongoDB URI**: Copy from your local `.env` file (the actual connection string with credentials)
> 
> **SMTP Password**: Use Gmail App-Specific Password (not your regular password)
> - Go to Google Account → Security → 2-Step Verification → App passwords
> - Generate new app password for "Mail"

## Step 6: Deploy

1. Click **"Create Web Service"** button
2. Render will start building and deploying your application
3. Wait for deployment to complete (usually 2-5 minutes)
4. You'll see logs in real-time

## Step 7: Verify Deployment

Once deployed, you'll get a URL like: `https://axentrixx-backend.onrender.com`

### Test the Health Endpoint

Open in browser or use curl:
```bash
curl https://axentrixx-backend.onrender.com/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Axentrixx Backend API is running",
  "timestamp": "2024-12-11T14:00:00.000Z"
}
```

### Test an API Endpoint

Test the contact form endpoint:
```bash
curl -X POST https://axentrixx-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Testing deployment"
  }'
```

## Step 8: Save Your Backend URL

**IMPORTANT**: Copy your backend URL (e.g., `https://axentrixx-backend.onrender.com`)

You'll need this for the frontend deployment to configure the `VITE_API_URL` environment variable.

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Verify `package.json` has correct dependencies
- Ensure Node version compatibility

### Database Connection Error
- Verify MongoDB URI is correct
- Check MongoDB Atlas network access (allow all IPs: `0.0.0.0/0`)
- Ensure database user has correct permissions

### Email Not Sending
- Verify SMTP credentials are correct
- Use Gmail app-specific password (not regular password)
- Check Gmail security settings

### API Returns 404
- Verify routes are correctly defined
- Check start command is `npm start`
- Review application logs in Render dashboard

## Monitoring & Logs

- **View Logs**: Render Dashboard → Your Service → Logs tab
- **Metrics**: Render Dashboard → Your Service → Metrics tab
- **Events**: See deployment history and events

## Updating Your Backend

Render automatically redeploys when you push to your connected GitHub branch:

```bash
# Make changes to your code
git add .
git commit -m "Update backend"
git push origin main
```

Render will detect the push and automatically redeploy.

## Next Steps

✅ Backend deployed successfully!

Now proceed to frontend deployment:
1. Use your backend URL: `https://axentrixx-backend.onrender.com`
2. Follow the `FRONTEND_DEPLOYMENT.md` guide
3. Configure `VITE_API_URL` in Vercel with your backend URL

## Cost & Limits (Free Tier)

- ✅ 750 hours/month (sufficient for one service)
- ⚠️ Spins down after 15 min inactivity
- ⚠️ 30-60 second cold start time
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth

For production with custom domain, consider upgrading to paid plan ($7/month) for:
- No spin down
- Faster performance
- More resources

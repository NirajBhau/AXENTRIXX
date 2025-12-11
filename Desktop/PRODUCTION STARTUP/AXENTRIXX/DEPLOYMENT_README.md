# 🚀 Axentrixx Deployment - Quick Start Guide

Your Axentrixx application is now ready for deployment! This guide provides a quick overview and links to detailed deployment instructions.

## 📋 Overview

Your application consists of:
- **Frontend**: React Router v7 application (SSR enabled)
- **Backend**: Node.js/Express API
- **Database**: MongoDB Atlas (already cloud-hosted ✓)

## 🎯 Deployment Strategy

### Backend → Render (Free Tier)
Deploy your API to get a public URL for the frontend to use.

### Frontend → Vercel (Free Tier)
Deploy your website with the backend API URL configured.

---

## 🔧 What's Been Configured

### Backend Files Created/Modified
- ✅ [`backend/package.json`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/package.json) - Added build script
- ✅ [`backend/render.yaml`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/render.yaml) - Render configuration
- ✅ [`backend/.env.example`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/.env.example) - Sanitized (credentials removed)
- ✅ [`backend/BACKEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/BACKEND_DEPLOYMENT.md) - Deployment guide

### Frontend Files Created/Modified
- ✅ [`web/package.json`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/package.json) - Added build & start scripts
- ✅ [`web/vercel.json`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/vercel.json) - Vercel configuration
- ✅ [`web/.vercelignore`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/.vercelignore) - Ignore file
- ✅ [`web/FRONTEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/FRONTEND_DEPLOYMENT.md) - Deployment guide

### Repository Files
- ✅ [`.gitignore`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/.gitignore) - Root gitignore

---

## 🚦 Deployment Steps (Quick Version)

### Step 1: Deploy Backend to Render

1. **Sign up**: https://render.com (use GitHub login)
2. **Create Web Service**: Connect your GitHub repo
3. **Configure**:
   - Runtime: Node
   - Build: `npm install`
   - Start: `npm start`
4. **Add Environment Variables** (see backend deployment guide)
5. **Deploy** and get your backend URL

📖 **Detailed Guide**: [`backend/BACKEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/BACKEND_DEPLOYMENT.md)

### Step 2: Deploy Frontend to Vercel

1. **Sign up**: https://vercel.com (use GitHub login)
2. **Import Project**: Connect your GitHub repo
3. **Configure**:
   - Framework: Other
   - Root Directory: `web` (if monorepo)
4. **Add Environment Variable**:
   - `VITE_API_URL` = Your Render backend URL
5. **Deploy** and get your website URL

📖 **Detailed Guide**: [`web/FRONTEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/FRONTEND_DEPLOYMENT.md)

---

## 🔑 Environment Variables Reference

### Backend (Render)

Required environment variables to configure in Render dashboard:

```bash
NODE_ENV=production
MONGODB_URI=<your-mongodb-atlas-uri>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=<your-email@gmail.com>
SMTP_PASS=<your-gmail-app-password>
CONTACT_EMAIL=contact@axentrixx.com
SALES_EMAIL=sales@axentrixx.com
HR_EMAIL=hr@axentrixx.com
TEAM_EMAIL=team@axentrixx.com
COMPANY_NAME=Axentrixx
COMPANY_PHONE=+1 (555) 123-4567
COMPANY_ADDRESS=San Francisco, CA
FRONTEND_URL=<your-vercel-url>
```

> [!IMPORTANT]
> **Get actual values from your local `.env` file** (backend/.env)

### Frontend (Vercel)

Required environment variable to configure in Vercel dashboard:

```bash
VITE_API_URL=<your-render-backend-url>
```

Example: `https://axentrixx-backend.onrender.com`

---

## ⚠️ Important Notes

### Before Deploying

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **MongoDB Atlas**: Verify your database allows connections from anywhere (IP: `0.0.0.0/0`)
3. **Gmail App Password**: Generate app-specific password for SMTP (not your regular password)

### After Deploying

1. **Test Backend**: Visit `https://your-backend.onrender.com/api/health`
2. **Test Frontend**: Check all pages load correctly
3. **Test Integration**: Submit a contact form to verify backend communication

### Free Tier Limitations

**Render (Backend)**:
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ 30-60 second cold start on first request
- ✅ 750 hours/month free

**Vercel (Frontend)**:
- ✅ 100 GB bandwidth/month
- ✅ No cold starts
- ✅ Global CDN

---

## 📚 Detailed Documentation

| Component | Guide | Purpose |
|-----------|-------|---------|
| Backend | [`BACKEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/BACKEND_DEPLOYMENT.md) | Step-by-step Render deployment |
| Frontend | [`FRONTEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/FRONTEND_DEPLOYMENT.md) | Step-by-step Vercel deployment |

---

## 🎯 Deployment Checklist

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas configured (allow all IPs)
- [ ] Gmail app password generated
- [ ] Render account created
- [ ] Vercel account created

### Backend Deployment
- [ ] Web service created on Render
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Health endpoint tested
- [ ] Backend URL saved

### Frontend Deployment
- [ ] Project imported to Vercel
- [ ] `VITE_API_URL` configured with backend URL
- [ ] Deployment successful
- [ ] Website loads correctly
- [ ] Forms work (backend integration tested)

### Post-Deployment
- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] Contact form tested
- [ ] Newsletter signup tested
- [ ] Quote request tested
- [ ] Consultation booking tested

---

## 🔄 Future Updates

### Automatic Deployments

Both platforms support automatic deployments:

**Push to GitHub** → **Auto-deploy**

```bash
git add .
git commit -m "Update website"
git push origin main
```

### Custom Domain (Later)

When you get your domain:

1. **Vercel**: Add custom domain in project settings
2. **Update DNS**: Point to Vercel's servers
3. **Backend**: Update `FRONTEND_URL` environment variable
4. **SSL**: Automatic with Vercel

---

## 🆘 Troubleshooting

### Backend Issues
- **Build fails**: Check Render logs, verify dependencies
- **Database error**: Verify MongoDB URI and network access
- **Email not sending**: Check Gmail app password

### Frontend Issues
- **Build fails**: Run `npm run build` locally first
- **API calls fail**: Verify `VITE_API_URL` is correct
- **CORS errors**: Update backend `FRONTEND_URL`

### Common Issues
- **Slow first load**: Render free tier cold start (30-60s)
- **Environment variables not working**: Redeploy after adding them
- **404 errors**: Check routing configuration

---

## 📞 Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Router**: https://reactrouter.com/start/framework/installation

---

## ✅ Next Steps

1. **Deploy Backend** following [`BACKEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/backend/BACKEND_DEPLOYMENT.md)
2. **Deploy Frontend** following [`FRONTEND_DEPLOYMENT.md`](file:///c:/Users/niraj/Desktop/PRODUCTION%20STARTUP/AXENTRIXX/web/FRONTEND_DEPLOYMENT.md)
3. **Test thoroughly** before sharing
4. **Share your website** with others!

---

**Good luck with your deployment! 🚀**

Your website will be accessible to anyone with the URL once deployed!

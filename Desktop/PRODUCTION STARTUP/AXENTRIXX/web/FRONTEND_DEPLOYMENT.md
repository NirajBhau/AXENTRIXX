# Frontend Deployment Guide - Vercel

This guide will walk you through deploying the Axentrixx frontend to Vercel.

## Prerequisites

- [x] GitHub account
- [x] Vercel account (sign up at https://vercel.com)
- [x] Frontend code pushed to GitHub repository
- [x] **Backend deployed and URL obtained** (from BACKEND_DEPLOYMENT.md)

## Step 1: Push Code to GitHub

If you haven't already, push your frontend code to GitHub:

```bash
# Navigate to your web directory
cd "c:\Users\niraj\Desktop\PRODUCTION STARTUP\AXENTRIXX\web"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare frontend for Vercel deployment"

# Add remote and push (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/axentrixx-web.git
git push -u origin main
```

> [!TIP]
> **Monorepo Setup**: If your backend and frontend are in the same repository, you can deploy both from one repo. Just specify the root directory during Vercel setup.

## Step 2: Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Sign up with GitHub (recommended for easy integration)

## Step 3: Import Project

1. From Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Import your GitHub repository:
   - Click **"Import"** next to your repository
   - If not visible, click **"Adjust GitHub App Permissions"** to grant access

## Step 4: Configure Project

### Framework Preset
- **Framework Preset**: Select **"Other"** or leave as detected
- Vercel should auto-detect the build settings from `vercel.json`

### Root Directory
- If deploying from monorepo: Set to `web`
- If separate repo: Leave empty

### Build Settings
These should be auto-filled from `vercel.json`, but verify:

- **Build Command**: `npm run build`
- **Output Directory**: `build/client`
- **Install Command**: `npm install`

### Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Notes |
|------|-------|-------|
| `VITE_API_URL` | `https://axentrixx-backend.onrender.com` | **Your actual backend URL from Render** |

> [!IMPORTANT]
> **Backend URL**: Use the URL you got from deploying the backend (Step 8 of BACKEND_DEPLOYMENT.md)
> 
> Example: `https://axentrixx-backend.onrender.com` (without trailing slash)

### Additional Environment Variables (if needed)

If your app uses Google Maps or other services, add those API keys:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | `your-api-key` |

> [!NOTE]
> Variables prefixed with `NEXT_PUBLIC_` or `VITE_` are exposed to the browser. Keep sensitive keys server-side only.

## Step 5: Deploy

1. Click **"Deploy"** button
2. Vercel will start building your application
3. Wait for deployment to complete (usually 2-5 minutes)
4. You'll see build logs in real-time

## Step 6: Verify Deployment

Once deployed, Vercel will provide a URL like: `https://axentrixx-web.vercel.app`

### Test the Website

1. Click the deployment URL
2. Navigate through key pages:
   - ✅ Home page loads
   - ✅ About page loads
   - ✅ Services page loads
   - ✅ Contact page loads

### Test Backend Integration

Test a form to ensure frontend can communicate with backend:

1. Go to Contact page
2. Fill out the contact form
3. Submit
4. Check for success message

> [!WARNING]
> **First Request Delay**: If using Render's free tier, the first API request may take 30-60 seconds as the backend spins up from sleep.

## Step 7: Update Backend CORS (if needed)

If you encounter CORS errors, update your backend's `FRONTEND_URL` environment variable:

1. Go to Render Dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Update `FRONTEND_URL` to your Vercel URL:
   ```
   FRONTEND_URL=https://axentrixx-web.vercel.app
   ```
5. Save and redeploy

> [!NOTE]
> Your backend currently allows all origins (`origin: '*'`), so this step may not be necessary initially.

## Step 8: Custom Domain (Optional - For Later)

When you get your custom domain:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `www.axentrixx.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### DNS Configuration Example

Add these records to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

> [!TIP]
> Vercel provides specific DNS instructions for your domain. Follow them exactly.

## Troubleshooting

### Build Fails

**Check build logs** in Vercel dashboard:

Common issues:
- Missing dependencies → Run `npm install` locally first
- TypeScript errors → Run `npm run typecheck` locally
- Environment variables missing → Add in Vercel dashboard

### Page Shows 404

- Verify React Router configuration
- Check `react-router.config.ts` settings
- Ensure SSR is enabled

### API Calls Fail

- Verify `VITE_API_URL` is set correctly
- Check browser console for CORS errors
- Ensure backend is running (check Render dashboard)
- Test backend health endpoint directly

### Styles Not Loading

- Clear browser cache
- Check if CSS files are in `build/client` directory
- Verify Tailwind CSS is configured correctly

### Environment Variables Not Working

- Ensure variables start with `VITE_` prefix
- Redeploy after adding/changing variables
- Check they're set in Vercel dashboard under **Settings** → **Environment Variables**

## Monitoring & Analytics

### Vercel Analytics (Optional)

Enable analytics to track:
- Page views
- Performance metrics
- User engagement

1. Go to Project → **Analytics** tab
2. Click **"Enable Analytics"**

### Logs

View deployment and runtime logs:
- **Deployments** tab → Select deployment → **Logs**
- Real-time function logs available

## Automatic Deployments

Vercel automatically redeploys when you push to your connected GitHub branch:

```bash
# Make changes to your code
git add .
git commit -m "Update frontend"
git push origin main
```

### Preview Deployments

- Every pull request gets a unique preview URL
- Test changes before merging to production
- Automatic cleanup after PR is closed

## Production Checklist

Before going live with custom domain:

- [ ] Test all pages and features
- [ ] Verify forms submit successfully
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Test backend integration thoroughly
- [ ] Set up custom domain
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Configure proper CORS on backend
- [ ] Set up monitoring/analytics
- [ ] Test performance (Lighthouse score)

## Performance Optimization

### Recommended Settings

1. **Enable Edge Functions** (if needed)
2. **Configure caching headers**
3. **Optimize images** (use Vercel Image Optimization)
4. **Enable compression**

### Speed Insights

Run Lighthouse audit:
1. Open deployed site
2. Open Chrome DevTools → **Lighthouse** tab
3. Run audit
4. Address any issues

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Cost & Limits (Free Tier)

- ✅ 100 GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ⚠️ Serverless function execution: 100 GB-hours

For production with high traffic, consider Pro plan ($20/month).

## Next Steps

✅ **Deployment Complete!**

Your website is now live at: `https://your-project.vercel.app`

### Share Your Website

Share the URL with others to test and get feedback!

### When You Get Your Domain

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Add custom domain in Vercel (Step 8 above)
3. Update DNS records
4. Wait for DNS propagation (up to 48 hours)
5. Update backend `FRONTEND_URL` to new domain

### Future Migration

When ready to migrate to another platform:
1. Export your Vercel configuration
2. Set up new hosting platform
3. Update DNS to point to new platform
4. Keep Vercel deployment as backup during transition

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **React Router Docs**: https://reactrouter.com
- **Community**: Vercel Discord, Stack Overflow

---

**Congratulations! Your Axentrixx website is now deployed! 🎉**

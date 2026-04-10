# MongoDB OAuth - Quick Start Guide

## Step 1: Setup

1. Open terminal in MONGO folder
2. Run: `npm install`

## Step 2: Configure OAuth Credentials

### Google OAuth Setup
1. Visit: https://console.cloud.google.com/
2. Create new project
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Copy Client ID and Secret to `config.js`

### GitHub OAuth Setup
1. Visit: https://github.com/settings/developers
2. New OAuth App
3. Fill in details:
   - Application name: MongoDB OAuth
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/auth/github/callback
4. Copy Client ID and Secret to `config.js`

### Facebook OAuth Setup
1. Visit: https://developers.facebook.com/
2. Create App
3. Add Product: Facebook Login
4. Settings → Basic (copy App ID and Secret)
5. Settings → Facebook Login (add redirect URI)
6. Copy credentials to `config.js`

## Step 3: MongoDB Setup

**Option A: Local MongoDB**
```
mongod
```

**Option B: MongoDB Atlas**
- Create account at https://www.mongodb.com/cloud/atlas
- Create cluster
- Get connection string
- Update `config.js` with connection string

## Step 4: Run Server

```bash
npm start
```

Server will run at: http://localhost:3000

## Step 5: Test Login

1. Open http://localhost:3000 in browser
2. Click "Login"
3. Choose Google, GitHub, or Facebook
4. Authorize the application
5. You'll be logged in!

## File Descriptions

| File | Purpose |
|------|---------|
| `server.js` | Main Express server |
| `config.js` | OAuth and MongoDB configuration |
| `User.js` | MongoDB user schema |
| `routes.js` | Authentication routes |
| `passport-config.js` | Passport strategies |
| `package.json` | Dependencies |
| `login.html` | Login UI |

## Common Issues & Solutions

**Issue**: Cannot connect to MongoDB
- **Solution**: Ensure MongoDB is running or check Atlas connection string

**Issue**: OAuth callback error
- **Solution**: Check redirect URLs match in provider settings

**Issue**: Session not persisting
- **Solution**: Clear browser cookies and restart server

## Next Steps

- Add user profile pages
- Add user settings/preferences
- Implement password reset
- Add email verification
- Deploy to production (Heroku, AWS, etc.)

## Additional Resources

- [Passport.js Documentation](http://www.passportjs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [OAuth 2.0 Spec](https://oauth.net/2/)

---

Happy coding! 🚀

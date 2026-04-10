# MongoDB OAuth Authentication System

A complete OAuth authentication system using MongoDB, Express.js, and Passport.js with support for Google, GitHub, and Facebook.

## Features

- ✅ Google OAuth 2.0 Authentication
- ✅ GitHub OAuth 2.0 Authentication
- ✅ Facebook OAuth 2.0 Authentication
- ✅ MongoDB Database Integration
- ✅ User Session Management
- ✅ Secure Password Hashing
- ✅ Express.js Backend
- ✅ Responsive UI

## Project Structure

```
MONGO/
├── server.js              # Main Express server
├── config.js              # OAuth configuration
├── User.js                # MongoDB User model
├── routes.js              # OAuth routes
├── passport-config.js     # Passport authentication strategies
├── package.json           # Project dependencies
├── login.html             # Login page
└── README.md              # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- OAuth credentials from:
  - Google OAuth Console
  - GitHub Developer Settings
  - Facebook Developers

## Installation

1. **Clone/Copy the project**
   ```bash
   cd MONGO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure OAuth Credentials**
   
   Edit `config.js` and add your OAuth credentials:
   
   ```javascript
   google: {
       clientID: 'YOUR_GOOGLE_CLIENT_ID',
       clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
       callbackURL: 'http://localhost:3000/auth/google/callback'
   },
   github: {
       clientID: 'YOUR_GITHUB_CLIENT_ID',
       clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
       callbackURL: 'http://localhost:3000/auth/github/callback'
   },
   facebook: {
       appID: 'YOUR_FACEBOOK_APP_ID',
       appSecret: 'YOUR_FACEBOOK_APP_SECRET',
       callbackURL: 'http://localhost:3000/auth/facebook/callback'
   }
   ```

4. **Configure MongoDB**
   
   Update MongoDB URI in `config.js`:
   ```javascript
   mongoURI: 'mongodb://localhost:27017/oauth_db'
   ```
   
   Or use MongoDB Atlas:
   ```javascript
   mongoURI: 'mongodb+srv://username:password@cluster.mongodb.net/oauth_db'
   ```

5. **Start the server**
   ```bash
   npm start
   ```
   
   Or with nodemon for development:
   ```bash
   npm run dev
   ```

## Obtaining OAuth Credentials

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 Credentials (Web application)
5. Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`

### GitHub OAuth
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/auth/github/callback`

### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new App
3. Add Facebook Login product
4. Configure OAuth Redirect URIs: `http://localhost:3000/auth/facebook/callback`

## API Endpoints

- `GET /` - Home page
- `GET /login` - Login page
- `GET /dashboard` - User dashboard (requires authentication)
- `GET /auth/google` - Google OAuth login
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/github` - GitHub OAuth login
- `GET /auth/github/callback` - GitHub OAuth callback
- `GET /auth/facebook` - Facebook OAuth login
- `GET /auth/facebook/callback` - Facebook OAuth callback
- `GET /logout` - Logout user
- `GET /user` - Get authenticated user data (JSON)

## Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String,
  googleId: String,
  githubId: String,
  facebookId: String,
  firstName: String,
  lastName: String,
  avatar: String,
  provider: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

- Session-based authentication
- Passport.js for OAuth handling
- MongoDB for secure user storage
- Environment variables for sensitive data
- HTTPS support (production)
- CORS protection

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MongoDB URI in config.js
- Verify network access (if using Atlas)

### OAuth Callback Error
- Verify callback URLs match in provider settings
- Check client ID and secret
- Ensure redirect URIs are correct

### Session Issues
- Clear browser cookies
- Check session secret in config.js
- Verify cookie settings

## License

MIT

## Support

For issues or questions, create an issue in the project repository.

const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.loginWithGoogle = async (req, res) => {
  const { idToken } = req.body;

  const userData = await verifyGoogleToken(idToken); // Implement this function using Google API to verify token

  let user = await User.findOne({ googleId: userData.sub });
  if (!user) {
    user = await new User({
      googleId: userData.sub,
      email: userData.email,
      name: userData.name,
    }).save();
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

async function verifyGoogleToken(idToken) {
  // Use Google API to verify the token
  // You might need to install 'google-auth-library'
  const { OAuth2Client } = require('google-auth-library');
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
}

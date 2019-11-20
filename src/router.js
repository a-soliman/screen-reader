import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import server from './server';
import prisma from './prisma';
import hashPassword from './utils/hashPassword';
import generatePassword from './utils/generatePassword';
import generateAuthToken from './utils/generateAuthToken';

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: `${process.env.API_URL}/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link', 'picture']
},
async function(accessToken, refreshToken, profile, cb) {
  const { displayName, emails, photos } = profile;
  if (!emails.length) throw new Error('Email not found')
  /**
   * 1. TODO :: handle downloading the profile image and hosting it.
   */
  const name = displayName;
  const email = emails[0].value;

  let user;
  const userExists = await prisma.exists.User({ email });
  if ( userExists ) user = await prisma.query.user({ where: { email }});
  else {
    const password = generatePassword();
    const hashedPassword = await hashPassword(password);
    user = await prisma.mutation.createUser({
      data: {
        name, email, avatar: 'no-avatar.jpg', password: hashedPassword
      }
    });
  }
  user.token = generateAuthToken(user.id);
  cb(null, user );
}
));

server.express.use(passport.initialize());

server.express.get('/auth/facebook', passport.authenticate('facebook', {
  authType: 'rerequest',
  scope: ['email', 'public_profile'],
}));

server.express.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res) => {
  const {user, token } = req;
  console.log({ user, token });
  res.send('Auth was good');
});

server.express.get('/route', async (req, res, next) => {
  res.send('hello bazina');
});


const express = require('express');
const app = express();
var cors = require('cors')
const router = require('./router');
const db = require('./db');
const PORT = 3001;

//**login middleware */
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./service/passport')
const authRouter = require('./router_auth');
const key = require('./config/keys');

app.use(cors())
app.use(express.json())

app.use( //-> start session
  cookieSession({
    maxAge: 1000 * 60 * 60, // 1hr
    keys: [key.cookieKey]
  })
);

//*passport should be declared after express session start
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);

app.use(router)

// async function using async await db was crashing server - working without - ask Andre FIXME:

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
});


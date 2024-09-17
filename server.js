import express from 'express';
const app = express();
import db from './db.js'
import dotenv from 'dotenv'
import passport from './auth.js'
import bodyParser from 'body-parser'
import Person from './Models/Person.js'
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(express.json()); // Instead of bodyParser.json()


// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
import personRoutes from './routes/PersonRoutes.js';
import menuItemRoutes from './routes/MenuRoutes.js';


// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
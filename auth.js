import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local';
import Person from './Models/Person.js'

passport.use(new LocalStrategy(async (users, pass, done) => {
    try{
        // console.log(`Recieved user : ${users, pass}` );
        const user = await Person.findOne({username:users})
        if(!user){
            return done(null, false, { message: 'Incorrect username or password.' });
        }
        const isPassword = user.comparePassword(pass) 
        if(!isPassword){
            return done(null, false, { message: 'Incorrect username or password.' });
        }

        return done(null, user);
    }catch(err){
        return done(err)
        
    }
}))

export default passport
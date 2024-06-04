import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Person } from './models/Person.js';

// Initialize Passport and define the LocalStrategy
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({ username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return done(null, false, { message: 'Incorrect password.' });
        } else {
            return done(null, user);
        }
    } catch (error) {
        console.log(error);
        return done(error);
    }
}));

export default passport;

import passport from 'passport';
import { Strategy } from 'passport-local';
import { LocalStrategy } from ('passport-local').Strategy;
import { Strategy as LocalStrategy } from 'passport-local';


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // permite pasar el req al callback
}, (req, email, password, done )=> {
    
}));
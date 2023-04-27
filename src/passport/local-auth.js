import passport from "passport";
import { encriptarPassword } from "../helpers/db-validators.js";

import { Strategy as LocalStrategy } from "passport-local";
import { Cuenta } from "../models/cuenta.js";

passport.serializeUser((cuenta, done) => {
  done(null, cuenta.id);
});

passport.deserializeUser(async (id, done) => {
  done(null, await Cuenta.findByPk(id));
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true, // permite pasar el req al callback
    },
    async (req, email, password, done) => {
      const usuario = await Cuenta.findOne({ where: { usuario: email } });
      if (usuario) {
        return done(
          null,
          false,
          req.flash("signupMessage", "El email ya existe")
        );
      } else {
        const newCuenta = new Cuenta();
        const encryptedPassword = newCuenta.encriptarPassword(password);
        newCuenta.usuario = email;
        newCuenta.password = encryptedPassword;
        newCuenta.set({ usuario: email, password: encryptedPassword });

        await newCuenta.save();
        done(null, newCuenta);
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true, // permite pasar el req al callback
    }, async (req, email, password, done) => {
      const usuario = await Cuenta.findOne({ where: { usuario: email } });
      if (!usuario) {
        return done(null, false, req.flash("signinMessage", "No existe el usuario"));
      }
      if (!usuario.validarPassword(password)) {
        return done(null, false, req.flash("signinMessage", "Contraseña incorrecta"));
      }
      done(null, usuario);
    }
  )
);
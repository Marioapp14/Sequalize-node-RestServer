import { Router } from "express";
import { Cuenta } from "../models/cuenta.js";
import passport from "passport";

const router = Router();

router.get("/main", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    passReqToCallback: true,
  })
);

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    passReqToCallback: true,
  })
);
router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/main');
  });
});

router.use((req, res, next) => {
  isAuthenticated(req, res, next);
});

router.get("/profile",(req, res, next) => {
  res.render("profile");
});


// funcion para verificar si un usuario esta autenticado
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

export default router;

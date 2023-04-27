import { Router } from "express";
import { Cuenta } from "../models/cuenta.js";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
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

router.get("/signin", (req, res, next) => {});

router.post("/signin");

router.get("/profile", (req, res, next) => {
  res.render("profile");
});

router.get("/logout", (req, res, next) => {});

export default router;

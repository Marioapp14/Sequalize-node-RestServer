import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup", (req, res, next) => {
    console.log(req.body);
    res.send("received");
});

router.get("/signin", (req, res, next) => {});

router.post("/signin");

router.get("/profile", (req, res, next) => {});

router.get("/logout", (req, res, next) => {});

export default router;

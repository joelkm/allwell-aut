const express = require('express')
const router = express.Router();
const path = require('path')
const { authorizeUser, validateLink } = require('../middlewares/token-authorization');

const publicPath = path.join(__dirname, "..", "..", "..", "client", "public");

router.use(express.static(publicPath))

router.get("/" ,(req, res) => {
    res.sendFile(path.join(publicPath, "redirect.html"));
});

router.get("/app/:id/:token", authorizeUser ,(req, res) => {
    res.sendFile(path.join(publicPath, "app.html"));
});


router.get("/login", (req, res) => {
    res.sendFile(path.join(publicPath, "log-in.html"));
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(publicPath, "sign-up.html"));
});

router.get("/password-reset", (req, res) => {
    res.sendFile(path.join(publicPath, "forgot-password.html"));
});

router.get("/password-reset/:id/:token", validateLink, (req, res) => {
    res.sendFile(path.join(publicPath, "change-password.html"));
});

module.exports = router;
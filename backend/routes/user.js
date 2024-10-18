const { Router } = require("express");
const { Authenticate } = require("../configs/Authenticate");
const {
  handleLogin,
  handleRegister,
  handleUsers,
} = require("../controllers/user");

const router = Router();

router.post("/login", handleLogin);

router.post("/register", handleRegister);

router.get("/users", Authenticate, handleUsers);

module.exports = router;

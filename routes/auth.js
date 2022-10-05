const authenticationMiddleware = require("../middlewares/authenticationMiddleware");
const AuthController = require("./../controllers/AuthController");

const router = require("express").Router();

router.post("/register", AuthController.register);
router.get("/login", authenticationMiddleware, AuthController.getDataWithBearerToken);

module.exports = router;

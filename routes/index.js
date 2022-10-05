const router = require("express").Router();
const authRouter = require("./auth");
const authenticationMiddleware = require("./../middlewares/authenticationMiddleware");

router.use("/auth", authRouter);
router.use(authenticationMiddleware);

module.exports = router;

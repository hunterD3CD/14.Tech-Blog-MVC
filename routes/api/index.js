const router = require("express").Router;
const userRoutes = require("./user-routes");

router.userRoutes("/users", userRoutes);

module.exports = router;

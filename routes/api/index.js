// The function is used to create a new router object with a middle path
const router = require("express").Router();
// import "user-routes.js"
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

// Mount the "userRoutes" object as middleware - a new router object at middle path "/users"
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;

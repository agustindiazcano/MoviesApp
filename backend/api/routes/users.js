const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.post("/", UserController.createUser)
router.put("/:id", UserController.editUser)
router.delete("/:id", UserController.deleteUser)

module.exports = router;

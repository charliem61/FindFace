const { getUser, getUsers, addUser, updateUser, deleteUser } = require("../../controllers/user")

const router = require("express").Router()

router.route("/").get(getUsers).post(addUser)

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

module.exports = router;
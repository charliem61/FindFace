const { getUser, getUsers, addUser, updateUser, deleteUser, addFriend, deleteFriend } = require("../../controllers/user")

const router = require("express").Router()

router.route("/").get(getUsers).post(addUser)

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend)

module.exports = router;
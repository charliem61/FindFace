const { getUser, getUsers, addUser } = require("../../controllers/user")

const router = require("express").Router()

router.route("/").get(getUsers).post(addUser)

router.route("/:id").get(getUser)
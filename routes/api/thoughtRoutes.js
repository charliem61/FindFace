const {
  getAllThoughts,
  postThought,
  getThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought");

const router = require("express").Router();
router.route("/").get(getAllThoughts).post(postThought);
router.route("/:id").get(getThought).delete(deleteThought).put(updateThought);

router.route("/:id/reactions").post(createReaction);
router.route("/:id/reactions/:reactionId").delete(deleteReaction);
module.exports = router;

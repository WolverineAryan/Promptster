const router = require("express").Router();
const Prompt = require("../models/Prompt");
const auth = require("../middleware/auth");

// Create
router.post("/", async (req, res) => {
  const prompt = new Prompt(req.body);
  await prompt.save();
  res.json(prompt);
});

// Get All
router.get("/", async (req, res) => {
  const prompts = await Prompt.find().populate("author", "name");
  res.json(prompts);
});

// Like
router.post("/:id/like", async (req, res) => {
  const prompt = await Prompt.findById(req.params.id);
  prompt.likes += 1;
  await prompt.save();
  res.json(prompt);
});

// Create with auth
router.post("/", auth, async (req, res) => {
  const prompt = new Prompt({
    ...req.body,
    author: req.user.id
  });

  await prompt.save();
  res.json(prompt);
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
app.use(express.static("public"));
const Song = require("./models/song");

mongoose.connect("mongodb://localhost:27017/Music", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 3369;
app.listen(PORT);

//=============================================================================================//
app.use(router);
router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.render("music_player.ejs", { songs });
});

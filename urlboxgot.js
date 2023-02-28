const got = require("got");
const fs = require("fs");
const Urlbox = require("urlbox");
const urlbox = Urlbox("NFNjOcVieiP3dXx5", "7d85bd59e48f49e0b50029e1797cf1a8");
 
const imgUrl = urlbox.buildUrl({
  url: "nytimes.com",
  block_ads: true,
  scroll_to: "#app > div:nth-child(2)",
});
got(imgUrl)
  .buffer()
  .then((response) => {
    fs.writeFileSync("nyt-urlbox-noads-scrolled.png", response, "binary");
  });
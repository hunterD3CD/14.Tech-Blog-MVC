const { Post } = require("../models");

const postData = [
  {
    title: "hunter1 house",
    content: "welcome to the music house",
    user_id: 1,
  },
  {
    title: "hunter1 landscape",
    content: "welcome to the grass field",
    user_id: 1,
  },
  {
    title: "hunter2 habbits",
    content: "he love playing bascketball",
    user_id: 2,
  },
  {
    title: "hunter3 music",
    content: "please enjoy this cool song",
    user_id: 3,
  },
  {
    title: "hunter4 sports",
    content: "Here's the latest news for sports",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

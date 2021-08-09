const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "this comment is created by user 1 and under post 1",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "this comment is created by user 2 and under post 2",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "this comment is created by user 3 and under post 3",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "this comment is created by user 4 and under post 4",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

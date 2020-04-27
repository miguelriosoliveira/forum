/* eslint-disable no-console */
const Post = require('../models/Post');

module.exports = {
  async getAll(request, response) {
    const { search = '', notAnswered = null } = request.query;

    let notAnsweredCondition = {};
    if (notAnswered !== null) {
      notAnsweredCondition =
        notAnswered === 'true' ? { answers: { $size: 0 } } : { answers: { $not: { $size: 0 } } };
    }

    let posts = await Post.find({
      $and: [
        notAnsweredCondition,
        {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { body: { $regex: search, $options: 'i' } },
          ],
        },
      ],
    });

    return response.json(posts);
  },

  async create(request, response) {
    const { title, body } = request.body;
    let post = await Post.create({ title, body });
    return response.json(post);
  },

  async getOne(request, response) {
    const { id } = request.params;

    let post = null;

    try {
      post = await Post.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      return response.status(error.response ? error.response.status : 500).json(error);
    }

    return response.json(post);
  },

  async like(request, response) {
    const { id } = request.params;

    let post = null;

    try {
      post = await Post.findOne({ _id: id }, 'likes');
    } catch (error) {
      console.log(error);
      return response.status(error.response ? error.response.status : 500).json(error);
    }

    post.likes = post.likes + 1;
    post.save();

    return response.json(post);
  },

  async answer(request, response) {
    const { id } = request.params;
    const { text } = request.body;

    let post = await Post.findOne({ _id: id });
    post.answers.push({ text });
    post.save();

    return response.json(post);
  },

  async likeAnswer(request, response) {
    console.log('likeAnswer');

    const { id, postId } = request.params;

    let post = null;

    try {
      post = await Post.findOne({ _id: postId, 'answers._id': id });
    } catch (error) {
      console.log(error);
      return response.status(error.response ? error.response.status : 500).json(error);
    }

    post.answers.find(answer => answer._id.toString() === id).likes++;
    post.save();

    return response.json(post);
  },
};

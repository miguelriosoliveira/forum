const express = require('express');

const PostController = require('./controllers/PostController');

const routes = express.Router();

routes.use((request, response, next) => {
  const { method, url } = request;
  const requestLog = `[${method}] ${url}`;
  // eslint-disable-next-line no-console
  console.time(requestLog);
  next();
  // eslint-disable-next-line no-console
  console.timeEnd(requestLog);
});

routes.get('/', (request, response) => response.send('Hello Word!'));

routes.get('/posts', PostController.getAll);
routes.post('/posts', PostController.create);
routes.get('/posts/:id', PostController.getOne);
routes.post('/posts/:id/like', PostController.like);
routes.post('/posts/:id/answer', PostController.answer);
routes.post('/posts/:postId/answer/:id/like', PostController.likeAnswer);

module.exports = routes;

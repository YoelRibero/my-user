const express = require('express');
const UsersService = require('../services/users');

function usersApi(app) {
  const router = express.Router();
  app.use('/api/users', router);
  const usersService = new UsersService();
  // Get Users
  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const users = await usersService.getUsers({ tags });
      res.status(200).json({
        data: users,
        message: 'Users listed - CORS-enabled'
      })
    } catch(err) {
      next(err);
    }
  });
  // Get User
  router.get('/:userId', async function(req, res, next) {
    const { userId } = req.params;
    try {
      const user = await usersService.getUser({ userId });
      res.status(200).json({
        data: user,
        message: 'User Obtained',
      });
    } catch(err) {
      next(err);
    }
  });
  // Create User
  router.post('/', async function(req, res, next) {
    const { body: user } = req;
    try {
      const createUser = await usersService.createUser({ user });
      res.status(201).json({
        data: createUser,
        message: 'User Created',
      });
    } catch(err) {
      next(err);
    }
  });
  // Update User
  router.put('/:userId', async function(req, res, next) {
    const { body: user } = req;
    const { userId } = req.params;
    try {
      const updatedUser = await usersService.updateMovie({ userId, user });
      res.status(200).json({
        data: updatedUser,
        message: 'User Updated',
      });
    } catch(err) {
      next(err)
    }
  });
  // Delete User
  router.delete('/:userId', async function(req, res, next) {
    const { userId } = req.params;
    try {
      const deletedMovie = await usersService.deleteMovie({ userId });
      res.status(200).json({
        data: deletedMovie,
        message: 'Movie Deleted',
      })
    } catch(err) {
      next(err);
    }
  });
}

module.exports = usersApi;

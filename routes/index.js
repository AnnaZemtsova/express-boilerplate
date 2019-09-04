const usersRouter = require('../routes/users');

const router = (privateRouter, publicRouter) => {
  publicRouter.use('/users', usersRouter);
};

module.exports = {
  router: router
};

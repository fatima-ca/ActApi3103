const UserController = require('../controllers/user');

const userController = new UserController();

class UserHttpHandler {
  async getAllUsers(request, response, next) {
    try {
      const users = await userController.getAllUsers(); // Changed tweets to users
      response.json(users); // Changed request.json to response.json
    } catch (error) {
      next(error);
    }
  }

  async getUserById(request, response, next) {
    // Implement getUserById logic here
  }

  async updateUser(request, response, next) {
    // Implement updateUser logic here
  }

  async deleteUser(request, response, next) {
    // Implement deleteUser logic here
  }
}

module.exports = UserHttpHandler;
const MongoLib = require('../lib/mongo');

class UsersService {
  constructor() {
    this.collection = 'users'
    this.mongoDB = new MongoLib();
  }
  async getUsers({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }
  async getUser({ userId }) {
    const user = await this.mongoDB.get(this.collection, userId);
    return user || {};
  }
  async createUser({ user }) {
    const createUser = await this.mongoDB.create(this.collection, user);
    return createUser;
  }
  async updateMovie({ userId, user } = {}) {
    const updateUser = await this.mongoDB.update(this.collection, userId, user);
    return updateUser;
  }
  async deleteMovie({ userId }) {
    const deletedUser = await this.mongoDB.delete(this.collection, userId);
    return deletedUser;
  }
}

module.exports = UsersService;

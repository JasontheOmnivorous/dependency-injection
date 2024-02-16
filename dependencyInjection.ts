interface UserType {
  name: string;
  email: string;
}

// Service Class
class UserService {
  users: UserType[];

  constructor() {
    this.users = [];
  }

  addUser(user: UserType) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}

// Consumer Class
class UserManager {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  addUserToService(user: UserType) {
    this.userService.addUser(user);
  }

  getUsersInService() {
    return this.userService.getUsers();
  }
}

const userServiceInstance = new UserService();
const userManagerInstance = new UserManager(userServiceInstance);

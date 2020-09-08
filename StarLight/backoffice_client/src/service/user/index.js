import { get } from '../../axios';

var userService = {};

userService.getUsers = () => {
  return get('/users');
};

export default userService;

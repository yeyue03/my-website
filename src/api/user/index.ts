import request from "..";

const UserApi = Object.freeze({
  MenuList: () => {
    return request.get('/user/menuList');
  }
})

export default UserApi;
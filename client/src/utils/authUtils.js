/* eslint-disable no-debugger */
/** THIS FILE ENCAPSULATE ALL THE UTILS NEEDED FOR AUTHENTICATION */

class AuthUtils {
  constructor() {
    this.isLoggedIn = false;
  }

  setUserAndToken(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    this.isLoggedIn = true;
  }

  removeTokenAndUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }
}

const authUtils = new AuthUtils();

export default authUtils;
/* eslint-disable no-debugger */
/** THIS FILE ENCAPSULATE ALL THE UTILS NEEDED FOR AUTHENTICATION */

class AuthUtils {
  constructor() {
    this.isLoggedIn = false;
    if (localStorage.getItem('token')) this.isLoggedIn = true;
  }

  setUserAndToken(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
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
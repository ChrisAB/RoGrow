const bcrypt = require('bcryptjs');

class LoginUser {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async correctPassword(passwordToCheck) {
    return await bcrypt.compare(passwordToCheck, this.password);
  }

  async changedPasswordAfter(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
        this.passwordChangedAt.getTime() / 100,
        10
      );
      return JWTTimestamp < changedTimestamp;
    }
    return false;
  }
}

module.exports = LoginUser;

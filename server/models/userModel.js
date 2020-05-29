class User {
  constructor(dbID, id, password, salt, email) {
    this.dbID = dbID;
    this.id = id;
    this.password = password;
    this.salt = salt;
    this.email = email;
  }
}

module.exports = User;

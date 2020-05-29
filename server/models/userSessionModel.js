class UserSession {
  constructor(sessionId, id, email) {
    this.sessionId = sessionId;
    this.id = id;
    this.email = email;
  }
}

module.exports = UserSession;

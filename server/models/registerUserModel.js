class RegisterUser {
  constructor(
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    city,
    region,
    address,
    role,
    CUI = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.email = email;
    this.city = city;
    this.region = region;
    this.address = address;
    this.role = role;
    this.CUI = CUI;
  }

  verifyPassword() {
    if (this.password !== this.confirmPassword) return false;
    this.confirmPassword = undefined;
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.password);
  }

  verifyEmail() {
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      this.email
    );
  }

  async verify() {
    if (this.firstName === null && this.lastName === null)
      return 'No firstname or lastname';
    if (!this.verifyPassword())
      return 'Password must be between 8 and 20 characters. Must contain at least one number, one lowercase letter and one uppercase letter';
    if (!this.verifyEmail()) return 'Not a valid email address';
    if (!this.city) return 'City is required';
    if (!this.region) return 'Region is required';
    if (!this.address) return 'Address is required';
    return true;
  }
}

module.exports = RegisterUser;

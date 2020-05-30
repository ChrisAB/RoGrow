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
    this.CUI = CUI;
    if (this.CUI == null) this.role = 'buyer';
    else this.role = 'seller';
  }

  verifyPassword() {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.password);
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

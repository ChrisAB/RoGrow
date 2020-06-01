class User {
  constructor(
    _id,
    firstName,
    lastName,
    email,
    county,
    region,
    address,
    sellerOrClientFlag
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.county = county;
    this.region = region;
    this.email = email;
    this.address = address;
    this.sellerOrClientFlag = sellerOrClientFlag;
  }

  changedPasswordAfter(date) {
    return false;
  }
}

module.exports = User;

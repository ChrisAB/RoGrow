class Product {
  constructor(
    _id,
    name,
    category,
    subcategory,
    description,
    price,
    quantity,
    pickupLocation,
    origin,
    sellerUniqueID
  ) {
    this._id = _id;
    this.name = name;
    this.category = category;
    this.subcategory = subcategory;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.pickupLocation = pickupLocation;
    this.origin = origin;
    this.sellerUniqueID = sellerUniqueID;
  }

  verify() {
    return true;
  }
}

module.exports = Product;

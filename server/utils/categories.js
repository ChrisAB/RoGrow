const categories = [];

function addCategory(category) {
  categories.push({ categoryName: category, subCategories: [] });
}

function addSubCategories(category, subCategories) {
  const categoryToAdd = categories.find((x) => x.categoryName === category);
  categoryToAdd.subCategories = subCategories;
}

function addCategories() {
  addCategory('Beef');
  addSubCategories('Beef', [
    'Chuck',
    'Brisket',
    'Rib',
    'Plate',
    'Short Loin',
    'Flank',
    'Sirloin',
    'Tenderloin',
    'Top Sirloin',
    'Bottom Sirloin',
    'Round',
    'Shank',
  ]);
  addCategory('Chicken');
  addSubCategories('Chicken', [
    'Breast Fillet',
    'Breast',
    'Ham',
    'Thigh',
    'Drumstick',
    'Hindquarter',
    'Rump',
    'Wing',
    'Forequarter',
    'Feet',
    'Liver',
    'Heart',
    'Gizzard',
    'Neck',
    'Mid-Joint Wing',
    'Tip',
    'Drumette',
  ]);
  addCategory('Fruit');
  addSubCategories('Fruit', [
    'Apricot',
    'Avocado',
    'Banana',
    'Cantaloupe',
    'Cucumber',
    'Dates',
    'Kale',
    'Lemon',
    'Pineapple',
    'Watermelon',
    'Apples',
    'Aloe Vera',
    'Artichoke',
    'Blackberry',
    'Orange',
    'Beans',
    'Beet',
    'Mango',
    'Broccoli',
    'Cabbage',
  ]);
  addCategory('Vegetable');
  addSubCategories('Vegetable', [
    'Radish',
    'Mushroom',
    'Asparagus',
    'Pepper',
    'Cucumber',
    'Onion',
    'Garlic',
    'Corn',
    'Tomato',
    'Squash',
    'Beet',
    'Pea',
    'Pumpkin',
  ]);
}

addCategories();

module.exports = categories;

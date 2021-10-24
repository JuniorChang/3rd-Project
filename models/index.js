const bookshelf = require("../bookshelf");

const Product = bookshelf.model("Product", {
  tableName: "products",
  category() {
    return this.belongsTo("Category");
  },
  country(){
    return this.belongsTo("country");
  }
});



const Category = bookshelf.model("Category", {
  tableName: "categories",
  products() {
    return this.hasMany("Product");
  },
});

const country = bookshelf.model("country",{
  tableName:"countries",
  products() {
    return this.hasMany("Product")
  }
})




module.exports = { Product, Category, country};

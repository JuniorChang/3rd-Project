const bookshelf = require("../bookshelf");

const Product = bookshelf.model("Product", {
  tableName: "products",
  category() {
    return this.belongsTo("Category");
  },
  country(){
    return this.belongsTo("country");
  },
  intensity(){
    return this.belongsTo("intensity");
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

const intensity = bookshelf.model('intensity',{
  tableName: 'intensity',
  products(){
    return this.hasMany("Products")
  }
})




module.exports = { Product, Category, country, intensity};

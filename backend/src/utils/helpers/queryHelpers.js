import Product from "../../models/product.model.js";

export async function getProductsQueryHandler(query) {
  if (query.page || query.pageSize) {
    let page = parseInt(query.page) || 1;
    let pageSize = parseInt(query.pageSize) || 20;
    let pageSkip = page - 1;
    const extraQuery = { ...query };
    delete extraQuery.page;
    delete extraQuery.pageSize;
    try {
      const products = await Product.find(extraQuery)
        .skip(pageSkip)
        .limit(pageSize)
        .populate("category")
        .sort({ title: 1 });
      return products;
    } catch (err) {
      console.log(err.message);
      return { error: err.message };
    }
  } else {
    try {
      const products = await Product.find(query)
        .limit(50)
        .populate("category")
        .sort({ title: 1 });
      return products;
    } catch (err) {
      console.log(err.message);
      return { error: err.message };
    }
  }
}

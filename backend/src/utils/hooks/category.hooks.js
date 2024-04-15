import Product from "../../models/product.model.js";
export async function removeProductsFromCategory() {
  const doc = this;
  try {
    const relatedProducts = await Product.find({
      category: doc._id,
    });
    if (relatedProducts) {
      for (const p of relatedProducts) {
        await Product.findByIdAndUpdate(p._id, { category: null });
      }
    }
    console.log("Deleted all products in the related category.");
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

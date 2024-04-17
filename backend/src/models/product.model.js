import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
      index: true,
    },
    image: {
      url: { type: String, default: "" },
      alt: {
        type: String,
        default: function () {
          return this.title + "-image-element";
        },
        trim: true,
        lowercase: true,
      },
    },
    brand: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
      index: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      default: null,
    },
    price: { type: Number, required: true, default: 0, min: 0, max: 10000 },
    discountRate: { type: Number, default: 0, min: 0, max: 100 },
    quantity: { type: Number, required: true, default: 1, min: 0.01 },
    unit: {
      type: String,
      required: true,
      default: 0,
      min: 0,
      max: 100,
      validate: {
        validator: function (value) {
          const unitRegex = /^(kg|g|mg|l|ml|cl)$/i;
          return unitRegex.test(value);
        },
        message: (props) => `${props.value} is not a valid unit!`,
      },
    }, //kg, liter, st
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 255,
      default: "No description",
    },
    stock: { type: Number, required: true, default: 0, min: 0, max: 1000 },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("discountedPrice").get(function () {
  const discountedPrice = this.price - (this.price * this.discountRate) / 100;
  return Math.round(discountedPrice);
});

productSchema.virtual("savings").get(function () {
  const originalPrice = this.price;
  const discountedPrice = originalPrice - (originalPrice * this.discountRate) / 100;
  const savings = originalPrice - discountedPrice;
  return Math.round(savings);
});

productSchema.virtual("comparePrice").get(function () {
  const discountedPrice = this.price - (this.price * this.discountRate) / 100;
  const quantity = this.quantity || 1;
  const comparePrice = discountedPrice / quantity;
  return Math.round(comparePrice);
});

// productSchema.pre("save", (next) => {
//   const product_doc = this;
//   if (!product_doc.image) {
//     console.log("Fetch an image!");
//   }
//   next();
// });

productSchema.index({ title: 'text', brand: 'text', description: 'text' });

const Product = model("Product", productSchema);

export default Product;

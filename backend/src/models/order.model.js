import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ShippingAddressSchema = new Schema({
  streetAdress: {
    type: String,
    required: [true, "Gatuaddress krävs"],
  },
  city: {
    type: String,
    required: [true, "Stad krävs"],
  },
  county: {
    type: String,
    required: [true, "Län krävs"],
  },
  postalCode: {
    type: String,
    required: [true, "Postnummer krävs"],
    match: [/^\d{3}\s?\d{2}$/, "Vänligen ange ett giltigt svenskt postnummer"],
  },
  country: {
    type: String,
    required: [true, "Land krävs"],
  },
});

const OrderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product ID is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
});

const OrderSchema = new Schema(
  {
    items: {
      type: [OrderItemSchema],
      validate: [(v) => Array.isArray(v) && v.length > 0, "Minst en artikel krävs"],
    },
    total: {
      type: Number,
      required: [true, "Totalt krävs"],
      min: [0, "Totalt måste vara ett positivt tal"],
    },
    status: {
      paid: { type: Boolean, default: false },
      shipped: { type: Boolean, default: false },
    },
    shippingAddress: {
      type: ShippingAddressSchema,
      required: [true, "Leveransadress krävs"],
    },
    customer: {
      firstName: {
        type: String,
        required: [true, "Förnamn krävs"],
      },
      lastName: {
        type: String,
        required: [true, "Efternamn krävs"],
      },
      email: {
        type: String,
        required: [true, "E-post krävs"],
        match: [/\S+@\S+\.\S+/, "Vänligen ange en giltig e-postadress"],
      },
    },
    paymentDetails: {
      cardNumber: {
        type: String,
        required: [true, "Kortnummer krävs"],
        match: [/^\d{16}$/, "Ogiltigt kortnummerformat"],
      },
      expDate: {
        type: String,
        required: [true, "Utgångsdatum krävs"],
        match: [/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Ogiltigt utgångsdatumformat"],
      },
      cardName: {
        type: String,
        required: [true, "Kortinnehavarens namn krävs"],
      },
      cvv: {
        type: String,
        required: [true, "CVV krävs"],
        match: [/^\d{3}$/, "Ogiltigt CVV-format"],
      },
    },
  },
  { timestamps: true }
);

const Order = model("Order", OrderSchema);

export default Order;

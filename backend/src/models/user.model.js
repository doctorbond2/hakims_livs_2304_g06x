import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
    validate: {
      validator: function (value) {
        const usernameRegex = /^\S+$/;
        return usernameRegex.test(value);
      },
      message: (props) => `${props.value} contains invalid characters.`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
    trim: true,
    validate: {
      validator: function (value) {
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()-_+=~`{}[\]|:;"'<>,.?/]+$/;
        return passwordRegex.test(value);
      },
      message: (props) => `${props.value} contains invalid characters.`,
    },
  },
  email: { type: String, required: true, unique: true, trim: true },
  admin: { type: Boolean, required: true, default: false },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  order: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const User = model("User", userSchema);

export default User;

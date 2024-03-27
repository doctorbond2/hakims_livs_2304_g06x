/* import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: 3, maxlength: 20, trim: true},
    password: { type: String, required: true, minlength: 6, maxlength: 20, trim: true },
    admin: { type: Boolean, required: true, default: false },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    address: {
        street: { type: String, required: true, trim: true },
        zip: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true }
    },
    order: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

const User = mongoose.model('User', userSchema);

export default User; */
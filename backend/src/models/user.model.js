import {Schema, model} from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: 3, maxlength: 20, trim: true},
    password: { type: String, required: true, minlength: 6, maxlength: 20, trim: true },
    email: { type: String, required: true, unique: true, trim: true},
    admin: { type: Boolean, required: true, default: false },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },  
    order: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

const User = model('User', userSchema);

export default User; 
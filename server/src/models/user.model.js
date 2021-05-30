import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  teamId: String,
});

export const UserModel = model('User', UserSchema);

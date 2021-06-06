import { model, Schema } from 'mongoose';

const LeagueSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
  },
  active: {
    type: Boolean,
  },
});

export const LeagueModel = model('League', LeagueSchema);

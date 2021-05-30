import { model, Schema } from 'mongoose';

const LeagueSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  divisionIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Division',
    },
  ],
});

export const LeagueModel = model('League', LeagueSchema);

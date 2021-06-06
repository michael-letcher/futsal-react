import { model, Schema } from 'mongoose';

const DivisionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  leagueId: {
    type: Schema.Types.ObjectId,
    ref: 'League',
    required: true,
  },
});

export const DivisionModel = model('Division', DivisionSchema);

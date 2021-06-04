import { model, Schema } from 'mongoose';

const DivisionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  seasonIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Season',
    },
  ],
});

export const DivisionModel = model('Division', DivisionSchema);

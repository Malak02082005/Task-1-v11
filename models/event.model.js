const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide an event title"],
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: [true, "Please provide an event date"]
  },
  location: {
    type: String,
    required: [true, "Please provide an event location"]
  },
  capacity: {
    type: Number,
    required: [true, "Please provide the event capacity"],
    min: [1, "Capacity must be at least 1"]
  },
  category: {
    type: String,
    enum: ['academic', 'social', 'sports', 'career', 'other'],
    default: 'other'
  },
  isFree: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    min: [0, "Price cannot be negative"],
    default: 0
  }
},
{
    timestamps: true
}
);

eventSchema.index({ title: 1, date: 1 }, { unique: true });
module.exports = mongoose.model('Event', eventSchema);
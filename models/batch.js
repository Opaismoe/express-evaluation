const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: true },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  colors: {type: Array},
  mainColor: {type: Number, default: 0 },
  remark: {type: String, default: 'Notes'},
});

const batchSchema = new Schema({
  name: { type: String, required: true },
  students: [studentSchema],
  startsAt: { type: Date, default: Date.now },
  endsAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('batches', batchSchema)

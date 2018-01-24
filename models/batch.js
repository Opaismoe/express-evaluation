const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: false },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  colors: {type: Array},
  mainColor: {type: Number, default: 0 },
  remark: {type: String, default: 'Notes'},
});

const batchSchema = new Schema({
  name: { type: String, required: true },
  students: [studentSchema],
  batchPc: {type: Array, default: [0,0,0]},
  startsAt: { type: String, required: true },
  endsAt: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('batches', batchSchema)

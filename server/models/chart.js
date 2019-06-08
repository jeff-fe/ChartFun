/* eslint-disable */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  img: String,
  chartData: Object
}, { timestamps: true });

module.exports = mongoose.model('chart', userSchema);

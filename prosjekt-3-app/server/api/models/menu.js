const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema ({
},  { collection: 'menu' });

module.exports = mongoose.model('Menu', menuSchema);
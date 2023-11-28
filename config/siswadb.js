const mongoose = require('mongoose');

const siswaDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/siswa');
  console.log('Database Mongo Connected....')
}

module.exports = siswaDB
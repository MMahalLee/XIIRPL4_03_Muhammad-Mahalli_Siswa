const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan Isi Nis'],
    },
    nama: {
        type: String,
        required: [true, 'Silahkan Isi Nama'],
    },
    email: {
        type: String,
        required: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email valid']
    },
    umur: {
        type: Number,
        required: true,
    },
    kelas: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Siswa', siswaSchema)
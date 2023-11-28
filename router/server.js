const express = require('express');
const router = express.Router();
const siswacontoller = require('../contollers/siswacontrollers');

router.get('/siswa', siswacontoller.getsiswa)

router.get('/siswa/:id', siswacontoller.getbyid)

router.post('/siswa', siswacontoller.post)

router.put('/siswa/:id', siswacontoller.put)

router.delete('/siwa/:id', siswacontoller.del)

module.exports = router;
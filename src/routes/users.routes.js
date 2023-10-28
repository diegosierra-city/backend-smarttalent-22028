const { Router } = require('express');
//
const {getUsers, signUser, createUser, updateUser, deleteUser} = require('../controllers/users.controller')

const router = Router();

router.get('/users', getUsers);
router.post('/signup', signUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
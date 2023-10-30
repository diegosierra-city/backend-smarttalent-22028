const { Router } = require('express');
//
const {getUsers, loginUser, createUser, updateUser, deleteUser} = require('../controllers/users.controller')

const router = Router();

router.get('/users', getUsers);
router.post('/login', loginUser);
router.post('/signup', createUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
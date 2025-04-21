const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercont');
const auth = require('../middleware/authmid');

router.put('/', auth, userController.updateUser); // Modification d'un utilisateur

module.exports = router;

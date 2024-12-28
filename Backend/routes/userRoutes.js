const express = require('express')
const router = express.Router()
const{ 
  registerUser,
  loginUser,
  getMe
 } = require('../controllers/userController')

 const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe) // adding the protect argument to hide the get me route from unauthorized access

module.exports = router
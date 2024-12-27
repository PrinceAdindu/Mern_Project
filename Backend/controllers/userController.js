const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc  Register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res)=> {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  //Check if User exists
  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)


  res.json({message: 'Register User'})
})

//@desc  Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res)=> {
  res.json({message: 'Login User'})
})

//@desc  Get user data
//@route GET /api/users/me
//@access Public
const getMe = asyncHandler(async(req, res)=> {
  res.json({message: 'Current user data display'})
})

module.exports = {
  registerUser,
  loginUser,
  getMe
}
const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal) //The protect parameter added was to protect access to viewing the list of goals. Same goes for set, delete and update goal access
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)


// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router
// @desc Get all goals
// @route GET /api/goals
// @access PRIVATE
const getGoals = (req, res) => {
  res.status(200).json({ msg: 'Get Goals!' })
};

// @desc Greate goal
// @route POST /api/goals
// @access PRIVATE
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error(`Please add a text field`)
  }
  res.status(200).json({ msg: 'Set Goals!' })
};

// @desc Update specific goal
// @route PUT /api/goals/:id
// @access PRIVATE
const updateGoal = (req, res) => {
  res.status(200).json({ msg: `Update goal: ${req.params.id}` })
};

// @desc Delete specific goal
// @route DELETE /api/goals/:id
// @access PRIVATE
const deleteGoal = (req, res) => {
  res.status(200).json({ msg: `Delete goal: ${req.params.id}` })
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
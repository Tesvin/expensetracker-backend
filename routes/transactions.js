const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses')
const { addIncome, deleteIncome, getIncomes } = require('../controllers/income')

const router = require('express').Router()



router.post('/add-income', addIncome)
router.get('/get-incomes', getIncomes)
router.delete('/delete-income/:id', deleteIncome)

router.post('/add-expenses', addExpense)
router.get('/get-expenses', getExpense)
router.delete('/delete-expenses/:id', deleteExpense)


module.exports = router
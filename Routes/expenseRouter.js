const { fetchexpenses, addexpenses, deletexpenses } = require('../Controllers/expensecontroller');

const router = require('express').Router(); 


//fetch all the expenses of user based on user_id
router.get('/', fetchexpenses);
//add expenses
router.post('/', addexpenses);
//delete expenses
router.delete ('/:expenseId', deletexpenses);  
 
module.exports = router; 
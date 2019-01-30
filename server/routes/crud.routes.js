const express = require('express');
const router = express.Router();

const employeCtrl = require('../controllers/employee.controller');

router.get('/', employeCtrl.getEmployees);
router.post('/', employeCtrl.createEmployee);
router.get('/:id', employeCtrl.getEmployee);
router.put('/:id', employeCtrl.updateEmployee);
router.delete('/:id', employeCtrl.deleteEmployee);

module.exports = router;
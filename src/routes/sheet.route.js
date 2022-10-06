const { addRow, updateRow } = require('../controllers/sheet.controller');
const router = require('express').Router();

router.post("/sheet/add",addRow)
router.post("/sheet/update",updateRow)

module.exports = router;
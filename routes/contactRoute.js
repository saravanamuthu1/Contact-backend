const express = require("express");
const router = express.Router();
const {getContacts,createContacts,putContact,deleteContact,getSpecificContact} = require('../controllers/contactController');
router.route("/"). get(getContacts);

router.route("/").post(createContacts);
router.route("/:id").get(getSpecificContact);
router.route("/:id").delete(deleteContact);
router.route("/:id").put(putContact);

module.exports = router;
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/", contactController.getAllContacts);
router.get("/user/:userId", contactController.getContactsByUserId);
router.post("/", contactController.createContact);
router.get("/trash", contactController.getTrashContacts);
router.get("/custom/:customId", contactController.getContactByCustomId);
router.put("/:id/restore", contactController.restoreContact);
router.delete("/:id/permanent", contactController.permanentDeleteContact);
router.get("/:id", contactController.getContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
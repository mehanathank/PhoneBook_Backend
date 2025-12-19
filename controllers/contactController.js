const Contact = require("../models/Contact");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ trash: false });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactsByUserId = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.params.userId, trash: false });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactByCustomId = async (req, res) => {
  try {
    const contact = await Contact.findOne({ id: req.params.customId });
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { trash: true });
    res.json({ message: "Contact moved to trash" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrashContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ trash: true });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.restoreContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { trash: false }, { new: true });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.permanentDeleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact permanently deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const asyncHandler = require("express-async-handler");
const Contacts  = require('../models/contactmodels');
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contacts.find();
    res.status(200).json(contact);
});
const createContacts = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,phone,email} = req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = Contacts.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});
const putContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `put contact immediately ${req.params.id}}`});
});
const getSpecificContact = asyncHandler(async(req,res)=>{
    const getContactById = await Contacts.findById(req.params.id);
    if(!getContactById){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(getContactById);
});
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `delete contact immediately${req.params.id}`});
});

module.exports = {getContacts, createContacts,putContact,getSpecificContact,deleteContact};
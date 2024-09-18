const mongoose = require('mongoose');
// Define the schema (with only phone number in contactInfo)
const clientSchema = new mongoose.Schema({
  clientId:String,
  clientName: String,
  contactInfo: String,
  receivedDate: Date,
  inventoryReceived: String,
  inventoryUpload:String,
  reportedIssues: String,
  clientNotes: String,
  assignedTechnician: String,
  estimatedAmount: Number,
  deadline:Date ,
  status: String

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

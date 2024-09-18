const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Client = require("./db/index")
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI);
const app = express();
const cors =require('cors')
app.use(bodyParser.json())
app.use(cors());


app.get("/client",(req,res)=>{
   try {
    Client.find({}).then((data)=>res.json(data))
   } catch (error) {
     console.log(error)
     res.send("something went wrong")
   }
})

app.get('/client/search',async(req,res)=>{
    try {
        const query = req.query.q;
        if (!query) {
          return res.status(400).json({ message: "Query parameter is required" });
        }
        const clients = await Client.find({
          $or: [
            { clientName: { $regex: query, $options: 'i' } }, // Search by clientName
            { clientId: { $regex: query, $options: 'i' } }    // Search by clientId
          ]
        });
    
        res.json(clients);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

app.post('/client',async(req,res)=>{
    try {
        const {
          clientName,
          contactInfo,
          receivedDate,
          inventoryReceived,
          inventoryFile,
          reportedIssues,
          clientNotes,
          assignedTechnician,
          deadline,
          status,
        } = req.body;
    
        const newJob = new Client(req.body);
        console.log(newJob)
        await newJob.save();
        res.status(201).json({ message: 'Job sheet saved successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving job sheet' });
      }
})

app.post('/client/:id',async(req,res)=>{
    const id =  req.params.id
    try {
        await Client.deleteOne({_id:id})
        res.json({msg:"deleted"})
    } catch (error) {
        console.log(error)
    }
})



app.listen(3000,()=>{
    console.log("server running on port 3000")
});
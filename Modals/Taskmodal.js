
const mongoose = require('mongoose');

const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  due_date :{
    type:String, required: true
  },
  status:{
    type:String, required: true
  },
  priority:{
    type:String, required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true
  },
  createdAt: {
    type: String,
    default: formattedDate
  }



  
});


const Taskmodal = mongoose.model('Task', taskSchema);

module.exports = Taskmodal;

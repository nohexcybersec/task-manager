

const mongoose = require('mongoose')   


//mongoose.connect('mongodb://localhost:27017/task-manager-api', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://localhost:27017/task-manager-api', {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});


// const Task = mongoose.model('Task', {
//     description: { 
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })




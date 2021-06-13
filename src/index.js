// I want to push this out as second version for github
//### once you update the package.json file and make changes to the following SCRIPT; then you can run the command : npm run dev
// "scripts": {
//     "start": "node src/index.js",
//     "dev": "nodemon src/index.js"
//   },




const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


// ////////////////////////////////  Setting up a basic user and update DB /////////////////////////////
// const me = new User({
//     name: '   michael   ',
//     age: 25,
//     email: 'michael@yahoo.COM      ',
//     password: ' redline12345  '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error -> MONGOOSE.JS', error)
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })
// ////////////////////////////////////////////////////////////////////////////////////////////////////





app.post('/users', (req, res) => {
    //console.log(req.body)
    //res.send('testing!')
    const user = new User(req.body)
    //console.log(user)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
         
    })

})


app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)         
    })
})










app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
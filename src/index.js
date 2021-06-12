// I want to push this out as second version for github


const express = require('express')
require('./db/mongoose')
const User = require('./models/user')




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
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
         
    })

})




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
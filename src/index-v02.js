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


// Working None ASYNC  ---------------------------------++++++++>>>>>>>>>>>>>>
// app.post('/users', (req, res) => {
//     const user = new User(req.body)
    
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
         
//     })

// })


app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    }catch (e){
        res.status(400).send(user)
    }
   
})





// app.get('/users',(req, res) => {
//     User.find({}).then((users) =>{
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send() 
//     })
// })


app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    }catch (e){
        res.status(500).send()
    }
   
})



// app.get('/users/:id',(req,res) => {
//     const _id = req.params.id
    
//     User.findById(_id).then((user) => {
//         if(!user){
//             console.log('not an error and did not find anything')    
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e) => { 
//         res.status(500).send()
//     })
// })



app.get('/users/:id', async (req,res) => {
    const _id = req.params.id
    
    try{
        const user = await User.findById(_id)

        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send()
    }

})

app.patch('/users/:id', async(req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

if(!isValidOperation){
    return res.status(400).send({error: 'Invalid update!'})
}

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    } catch(e){
        res.status(400).send(e)        
    }
})




// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)
    
//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)         
//     })
// })



app.delete('/users/:id', async (req, res) => {

    try{
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    } catch (e){
        res.status(500).send()
    }

})









app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e) 
    }    
    
})



// app.get('/tasks',(req, res) => {
//     Task.find({}).then((tasks) =>{
//         res.send(tasks)
//     }).catch((e) => {
//         res.status(500).send() 
//     })
// })

app.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send() 
    }  
    
  })


// app.get('/tasks/:id',(req,res) => {
//     const _id = req.params.id
    
//     Task.findById(_id).then((task) => {
//         if(!task){
              
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e) => { 
//         res.status(500).send()
//     })
// })



app.get('/tasks/:id',async (req,res) => {
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
              
            return res.status(404).send()
        }
        res.send(task)

    }catch(e){
        res.status(500).send()
    }
    
})


app.patch('/tasks/:id', async(req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

if(!isValidOperation){
    return res.status(400).send({error: 'Invalid update!'})
}

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)

    } catch(e){
        res.status(400).send(e)       
    }
})
 


app.delete('/tasks/:id', async (req, res) => {

    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }
        res.send(task)

    } catch (e){
        res.status(500).send()
    }

})







app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
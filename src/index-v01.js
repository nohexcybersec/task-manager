const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())


app.post('/users', (req, res) => {
    // console.log(req.body)
    // res.send('testing!')
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch(() => {

    })

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
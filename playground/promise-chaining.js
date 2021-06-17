require('../src/db/mongoose')
const User=require('../src/models/user')


//60c5533e39da0028d05d3bd3


// User.findByIdAndUpdate('60c5533e39da0028d05d3bd3',{age: 50}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:50})
//     }).then((result) => {
//         console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async(id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('60c5533e39da0028d05d3bd3', 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
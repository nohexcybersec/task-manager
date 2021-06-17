require('../src/db/mongoose')
const Task=require('../src/models/task')







// Task.findByIdAndDelete('60c5544464aa4f3e74fc8b51').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
//     }).then((result) => {
//         console.log(result)
// }).catch((e) => {
//     console.log(e)
// })



const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('60c554f32dfaa12a54afdfeb').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
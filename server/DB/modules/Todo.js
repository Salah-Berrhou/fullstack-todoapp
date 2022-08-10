const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: String,
    body: String,
    favorite: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
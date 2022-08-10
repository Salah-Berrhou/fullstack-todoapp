const express = require("express")
const connectDb = require("./DB/connect")
const Todo = require("./DB/modules/Todo")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

connectDb()

app.post('/save', async (req, res) => {
    console.log(req.body)
    const todo = new Todo(req.body)
    await todo.save()
})


app.listen(4000)
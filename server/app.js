const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const usersDb = require('./model/userSchema')


app.use(cors())
app.use(express.json())
app.listen(3001)

mongoose.connect(process.env.MONGO_KEY,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Connection successful')
    }).catch(e => {
    console.log(e)
    console.log('Connection error')
})


app.post('/createnewuser',  (req, res) => {
    const {userName, age, email, password} = req.body
    let user = new usersDb

    user.userName = userName
    user.age = age
    user.email = email
    user.password = password

    user.save().then(() => {
        res.send({error: false, message: `Vartotojas '${req.body.userName}' sėkmingai sukurtas.`})
    }).catch(e => {
        res.send({userName, age, email, password, error: true, message: e})
    })
})

app.get('/showallusers', async (req, res) => {
    const allUsers = await usersDb.find()
    res.send(allUsers)
})

app.get('/deleteuser/:id', async (req, res) => {
    await usersDb.findOneAndDelete({_id: req.params.id})
    res.send({error: false, message: 'Vartotojas pašalintas'})
})

app.get('/updateuser/:id', async (req, res) => {
    const user = await usersDb.findOne({_id: req.params.id})
    const {userName, age, email, _id} = user
    res.send({userName, age, email, _id})
})

app.post('/updateusercreds', async (req, res) => {
    const {userName, age, email, id} = req.body
    await usersDb.findOneAndUpdate({_id: id},
        {
            $set: {userName: userName, age: age, email: email}
        })
    res.send({error: false, message: `${userName} atnaujintas.`})
})
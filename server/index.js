require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
// const user_ctrl = require('./user.controllers')

app.use(express.json())
// database is a reference to the database opn Heroku
massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(process.env.SERVER_PORT, () => console.log(`IN LOVE WITH CHELLIE PETE _${SERVER_PORT}`))
})

const PORT = 3456
app.listen(PORT, () => console.log(`Caleb is a frickin boss ${PORT}`))
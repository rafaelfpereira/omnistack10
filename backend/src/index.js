const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// Mongo DB (banco não relacional)
mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-ouxar.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(cors())
app.use(express.json())
app.use(routes)

//define a porta
app.listen(3333)

//foram instalados até agora:
// - insomnia para teste de api
// - nodemon (yarn add nodemon -D) para live update da api
// - mongoose (yarn add mongoose) para conexão com o banco
// - axios

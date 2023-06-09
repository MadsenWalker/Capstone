require('.env').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

// DB imports
const {sequelize} = require('./util/database')
const {seedDatabase} = require('./util/seed')
const {Goal} = require('./models/goal')
const {Hero} = require('./models/hero')
const {Resource} = require('./models/resource')
const {User} = require('./models/user')


// DB relationships
User.hasMany(Goal,Hero,Resource)
Goal.belongsTo(User)
Hero.belongsTo(Goal)




// Controller imports
const {register, login, checkUser} = require('./controllers/authCtrl')

const app = express()

app.listen(5309, console.log(`I got your number 867 ${5309}`))
app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))


app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())
    .then(() => app.listen(SERVER_PORT, console.log(`I got your PORT number 867-5309' ${SERVER_PORT}!`)))
    .catch(err => console.log(err))
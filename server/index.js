require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

// DB imports
const {sequelize} = require('./util/database')
const {seedDatabase} = require('./util/seed')
const {User} = require('./models/user')
const {Goal} = require('./models/goal')
const {Hero} = require('./models/hero')
const {Resource} = require('./models/resource')



// // DB relationships
User.hasMany(Goal)
Goal.belongsTo(User)
// User.hasMany(Resource)
// Resource.belongsTo(User)

// Hero.hasMany(Goal)






// Controller imports
const {register, login, checkUser, logout} = require('./controllers/authCtrl')
const {addNewGoal, getUserGoals, getGoalDetails} =require('./controllers/goalsCtrl')
const {hero} =require('./controllers/heroCtrl')




const app = express()

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

// auth points
app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.post('/api/logout', logout)

//end points

app.post('/api/goal', addNewGoal)
app.get('/api/goal/:userId', getUserGoals)

// app.get('/api/hero', hero )
// app.get('/api/resource',)

sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())
    .then(() => app.listen(SERVER_PORT, console.log(`I got your PORT number 867-${SERVER_PORT}!`)))
    .catch(err => console.log(err))
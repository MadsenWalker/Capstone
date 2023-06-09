const {sequelize}= require(`./database`)
const {Goal} = require(`../models/goal`)

const goals = [
    {
        category: 'Physical'
    },
    {
        description: 'lose 50 pounds'
    },
    {
        unit_of_measure: 'pounds'
    },
    {
        perfect_score: '50'
    },
    {
        photo_album_link: 'https://photos.app.goo.gl/DgsiTtFSCBw97Uxj6'
    }
]

const seedDatabase = async () => {
    await Goal.bulkCreate(goals)
}

module.exports = {
    seedDatabase
}
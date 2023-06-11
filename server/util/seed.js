const {sequelize}= require(`./database`)
const {Goal} = require(`../models/goal`)

const goal = [
    {
        category: 'Physical',
        description: 'lose 50 pounds',
        unit_of_measure: 'pounds',
        perfect_score: '50',
        photo_album_link: 'https://photos.app.goo.gl/DgsiTtFSCBw97Uxj6',
    },

    {
        category: 'Home Improvement',
        description: 'Finish basement remodel by the end of July',
        unit_of_measure: true,
        perfect_score: true,
        photo_album_link: 'https://photos.app.goo.gl/aTNHqwBKC9voP4QW7',
    },
  
]

const seedDatabase = async () => {
    await Goal.bulkCreate(goal)
}

module.exports = {
    seedDatabase
}
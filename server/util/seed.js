const {sequelize}= require(`./database`)
const {Goal} = require(`../models/goal`)
const {Resource} = require('../models/resource')
const {User} = require('../models/user')

const goals = [
    {
        title: "lose weight",
        category: 'Physical',
        description: 'lose 50 pounds',
        unit_of_measure: 'pounds',
        perfect_score: '50',
        current_score: '0',
        photo_album_link: 'https://photos.app.goo.gl/DgsiTtFSCBw97Uxj6',
        
    },

    {
        title: 'Basment Reno',
        category: 'Home Improvement',
        description: 'Finish basement remodel by the end of July',
        unit_of_measure: 'N/A',
        perfect_score: '1',
        current_score: '0',
        photo_album_link: 'https://photos.app.goo.gl/aTNHqwBKC9voP4QW7',
        userId: 1
     
    },
  
]

const resources = [
    {
        title: `Matt D'Avella, Simple productivity system`,
        body: 'https://www.youtube.com/watch?v=BtiQvhQF8IA',
        additional_info: '26 min long',
        
        

    },
]



const seedDatabase = async () => {
    await Goal.bulkCreate(goals)

    await Resource.bulkCreate(resources)
}

module.exports = {
    seedDatabase
}
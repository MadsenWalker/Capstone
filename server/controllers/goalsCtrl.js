const { Goal } = require("../models/goal")
const { User } = require("../models/user")
const { Resource } = require("../models/resource")
const { Hero } = require("../models/hero")

module.exports = {
    addNewGoal: async (req, res) => {
        try {
            const {
                title,
                category,
                description,
                unit_of_measure,
                perfect_score,
                photo_album_link,
                user_id
            } = req.body

            const newGoal = await Goal.create({
                title,
                category,
                description,
                unit_of_measure,
                perfect_score,
                photo_album_link,
                user_id
            })

            // selectedTopics.forEach(async id => {
            //     await BookTopic.create({ bookId: newBook.id, topicId: id })
            // })

            res.sendStatus(200)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Goal was not added successfully")
        }
    },
    getUserGoals: async (req, res) => {
        try {
            const { userId } = req.params

            const goals = await Goal.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["username", "id"],
                        where: { id: userId }
                    },
                    {
                        model: goal,
                        attributes: ["id"],
                        
                    }
                ]
            })

            res.status(200).send(books)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

}
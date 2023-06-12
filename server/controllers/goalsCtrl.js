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
                current_score,
                photo_album_link,
                userId
            } = req.body

            const newGoal = await Goal.create({
                title,
                category,
                description,
                unit_of_measure,
                perfect_score,
                current_score,
                photo_album_link,
                userId
            })


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
                where: { userId: userId },
                include: [
                    {
                        model: User,
                        attributes: ["username", "id"],
                      
                    },
                    
                ]
            })

            res.status(200).send(goals)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    // editGoal: async (req, res) => {
    //     try {
    //         const {

    //         }
    //     }
    // } catch (err) {}
    // console.log(err)
    // res.send.Status(500)


}
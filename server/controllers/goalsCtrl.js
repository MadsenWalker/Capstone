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
                userid,
            } = req.body

            const newGoal = await Goal.create({
                title,
                category,
                description,
                unit_of_measure,
                perfect_score,
                photo_album_link,
                userid,
            })

            selectedTopics.forEach(async id => {
                await BookTopic.create({ bookId: newBook.id, topicId: id })
            })

            res.sendStatus(200)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Book was not added successfully")
        }
    },
//     getUserBooks: async (req, res) => {
//         try {
//             const { userId } = req.params

//             const books = await Book.findAll({
//                 include: [
//                     {
//                         model: User,
//                         attributes: ["username", "id"],
//                         where: { id: userId }
//                     },
//                     {
//                         model: BookTopic,
//                         attributes: ["id"],
//                         include: [
//                             {
//                                 model: Topic,
//                                 attributes: ["id", "topicName"]
//                             }
//                         ]
//                     }
//                 ]
//             })

//             res.status(200).send(books)
//         } catch (err) {
//             console.log(err)
//             res.sendStatus(500)
//         }
//     },
//     getBookDeets: async (req, res) => {
//         try{
//             const {bookId} = req.params

//             const book = await Book.findOne({
//                 where: {id: bookId},
//                 include: [
//                     {
//                         model: User,
//                         attributes: ["username", "id"]
//                     },
//                     {
//                         model: BookTopic,
//                         attributes: ["id"],
//                         include: [
//                             {
//                                 model: Topic,
//                                 attributes: ["id", "topicName"]
//                             }
//                         ]
//                     }
//                 ]
//             })

//             res.status(200).send(book)

//         }catch(err){
//             console.log(err)
//             res.status(400).send("no book found")
//         }
//     }
}
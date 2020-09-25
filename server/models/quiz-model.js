const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const Movie = new Schema(
//     {
//         name: { type: String, required: true },
//         time: { type: [String], required: true },
//         rating: { type: Number, required: true },
//     },
//     { timestamps: true },
// )

// module.exports = mongoose.model('movies', Movie)
/*********************** test Quiz **************************/
const Quiz = new Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('quiz', Quiz)
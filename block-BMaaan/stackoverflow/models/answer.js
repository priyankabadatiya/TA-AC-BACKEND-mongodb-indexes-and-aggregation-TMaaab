let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let answerSchema = new Schema({
    questionId: {type: Schema.Types.ObjectId, ref: "Question"},
    answer: { type: String, required: true },
    commentId: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    description: String,
    tags: {type: [String], required: true},
    authorId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    upVotes: {type: Number, default: 0},
}, {timestamps: true});

answerSchema.index({tags: 1});

module.exports = mongoose.model("Answer", answerSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const attemptSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    answers: [
      {
        questionId: {
          type: Schema.Types.ObjectId,
          ref: 'Question',
          required: true,
        },
        selectedOption: {
          type: Schema.Types.ObjectId,
          ref: 'Question.options',
        },
      },
    ],
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Attempt', attemptSchema);

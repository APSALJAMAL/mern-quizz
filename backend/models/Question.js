import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Question', questionSchema);

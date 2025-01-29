import mongoose from "mongoose";

const { Schema } = mongoose;

const quizSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    timer: {
      type: Number, // in minutes
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Quiz', quizSchema);

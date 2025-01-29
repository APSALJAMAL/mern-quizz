import express from "express";
import { authMiddleware, adminMiddleware } from "../middleware/Auth.js";

// Import Controllers
import {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuizzes,
  getQuizById,
  attemptQuiz,
  getUserAttempts,
  getAdminQuizes,
  getQuizAttempts,
} from "../controllers/quizController.js";

import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuizQuestions,
} from "../controllers/questionController.js";

import { login, register } from "../controllers/userController.js";

const router = express.Router();

// User Authentication
router.post("/login", login);
router.post("/register", register);

// Quiz routes
router.get("/admin-quizzes", authMiddleware, adminMiddleware, getAdminQuizes);
router.get("/attempts/:id", authMiddleware, adminMiddleware, getQuizAttempts);
router.post("/quizzes", authMiddleware, adminMiddleware, createQuiz);
router.put("/quizzes/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/quizzes/:id", authMiddleware, adminMiddleware, deleteQuiz);

// Question routes
router.get("/questions/:id", authMiddleware, getQuizQuestions);
router.post("/questions", authMiddleware, adminMiddleware, createQuestion);
router.put("/questions/:id", authMiddleware, adminMiddleware, updateQuestion);
router.delete("/questions/:id", authMiddleware, adminMiddleware, deleteQuestion);

// Data routes
router.get("/quizzes", authMiddleware, getAllQuizzes);
router.get("/quizzes/:id", authMiddleware, getQuizById);
router.post("/quizzes/:id/attempt", authMiddleware, attemptQuiz);
router.get("/attempts", authMiddleware, getUserAttempts);

export default router;

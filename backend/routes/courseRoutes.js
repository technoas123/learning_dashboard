const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const {
  createCourse,
  getCourses,
  getCourseById,
} = require('../controllers/courseController');

router.route('/').get(getCourses).post(protect, authorizeRoles('educator', 'admin'), createCourse);
router.route('/:id').get(getCourseById);

module.exports = router;

const Course = require('../models/Course');

// @desc    Create a new course
// @route   POST /api/courses
// @access  Educator/Admin
const createCourse = async (req, res) => {
  const { title, description } = req.body;

  try {
    const course = await Course.create({
      title,
      description,
      educatorId: req.user._id,
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error creating course', error: err.message });
  }
};

// @desc    Get all courses
const getCourses = async (req, res) => {
  const courses = await Course.find().populate('educatorId', 'name email role');
  res.status(200).json(courses);
};

// @desc    Get course by ID
const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('educatorId', 'name');
  if (!course) return res.status(404).json({ message: 'Course not found' });

  res.status(200).json(course);
};

module.exports = { createCourse, getCourses, getCourseById };

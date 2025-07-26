const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Create assignment
router.post('/', assignmentController.createAssignment);
// Get all assignments
router.get('/', assignmentController.getAssignments);
// Get assignment by ID
router.get('/:id', assignmentController.getAssignmentById);
// Update assignment
router.put('/:id', assignmentController.updateAssignment);
// Delete assignment
router.delete('/:id', assignmentController.deleteAssignment);

module.exports = router;

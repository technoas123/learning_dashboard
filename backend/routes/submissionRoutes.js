const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Learner submits answer
router.post('/', submissionController.createSubmission);
// Get all submissions (educator)
router.get('/', submissionController.getSubmissions);
// Get submissions for an assignment
router.get('/assignment/:assignmentId', submissionController.getSubmissionsByAssignment);
// Get a single submission
router.get('/:id', submissionController.getSubmissionById);
// Educator reviews and marks a submission
router.put('/review/:id', submissionController.reviewSubmission);
// Delete a submission
router.delete('/:id', submissionController.deleteSubmission);

module.exports = router;

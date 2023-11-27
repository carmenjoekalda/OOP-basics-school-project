const courseController = require('../controllers/courses')
router.get("/:name", (req, res) => courseController.getCourseName(req, res))

module.exports=router;
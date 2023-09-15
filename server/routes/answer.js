const router = require("express").Router();
const { answerController } = require("../controller/answerController");



router.post('/answer',answerController);


module.exports = router
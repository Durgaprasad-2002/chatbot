const { Router } = require("express");
const {
  handleResponseSave,
  handleUserResponses,
  handleUserResponsesCount,
} = require("../controllers/response");

const router = Router();

router.post("/", handleResponseSave);

router.get("/user", handleUserResponses);

router.get("/user/response/count", handleUserResponsesCount);

module.exports = router;

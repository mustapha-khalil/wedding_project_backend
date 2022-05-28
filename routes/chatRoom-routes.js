const express = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const { getChats, getAllChats } = require("../controllers/chatRoom-controller");

const router = express.Router();

router.get("/:ids", getAllChats);

router.get("/:roomId", getChats);

module.exports = router;
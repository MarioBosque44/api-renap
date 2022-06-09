const express = require("express");
const router = express.Router();

const people = require("../controllers/people.controller");

router.get("/", people.getPeoples);
router.post("/", people.createPeople);
router.get("/:id", people.getPeople);
router.get("/:lastname", people.getPeopleLast);
router.get("/:DPI", people.getPeopleDPI);
router.put("/:id", people.editPeople);
router.delete("/:id", people.deletePeople);

module.exports = router;
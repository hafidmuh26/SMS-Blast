const { Router } = require("express");
const smsblasts = require("../controllers/smsBlastControllers");
var router = require("express").Router();

router.post("/api/smsblasts",smsblasts.create);
router.get("/api/smsblast/:id",smsblasts.findById)
router.get("/api/smsblasts", smsblasts.findAll);
router.put("/api/smsblast/:id", smsblasts.update)
router.delete("/api/smsblast/:id", smsblasts.delete)

module.exports = router
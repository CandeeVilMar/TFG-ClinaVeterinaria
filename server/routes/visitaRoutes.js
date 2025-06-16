const express = require("express");
const router = express.Router();
const visitaController = require("../controller/visitaController");

router.get("/", visitaController.getAll);
router.get("/:id", visitaController.getOne);
router.post("/", visitaController.create);
router.put("/:id", visitaController.update);
router.delete("/:id", visitaController.remove);

module.exports = router;

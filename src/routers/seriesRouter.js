const express = require('express')
const router = express.Router()
const seriesController = require("../controllers/seriesController")

router.get('/', seriesController.listarSeries)
router.post('/', seriesController.criarSerie)
router.put('/:id', seriesController.attserie)
router.delete('/:id', seriesController.delserie)

module.exports = router
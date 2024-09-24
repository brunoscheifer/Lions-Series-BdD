const express = require('express')
const app = express();
const seriesRouter = require("./routers/seriesRouter")

app.use(express.json())
app.use("/series", seriesRouter)

module.exports = app
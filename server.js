const express = require("express")
const app = express()
const colors = require("colors")

app.use(express.json())
app.set("view engine", "ejs")

app.get("/portfolio", async(req, res) => {
    res.render("portfolio")
})

app.listen(3000, () => {
    console.log(`✅ Le dashboard est en ligne`.green.bold)
})
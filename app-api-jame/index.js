const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.json({ message: "Ahoy!" })
})

app.get("/data", (req, res) => {
    // ? SHOW
    res.json({ message: "get DATA" })
})

app.get("/profile", (req, res) => {
    // ? SHOW
    res.json({ name: "Chantawat Thanyaphatarin", nickname: "Jame" })
})

app.post("/", (req, res) => {
    // ? POST
    res.json({ message: "create DATA" })
})

app.put("/", (req, res) => {
    // ! UPDATE
    res.json({ message: "updated DATA" })
})

app.delete("/", (req, res) => {
    // ! DEALETE
    res.json({ message: "delete DATA" })
})

app.listen(9000, () => {
    console.log("Application is running on port 9000")
})

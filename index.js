const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendfile("index.html")
})

server.listen(3000)
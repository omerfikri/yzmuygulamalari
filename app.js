const express = require("express");

const server = express();


function middleware(req, res, next) {
    console.log('Yeni bir istek geldi');
    next()
}

function middlewarePost(req, res, next) {
    console.log('post isteği geldi');
    next()
}

server.post("/hello",middleware, middlewarePost , (req, res) => {
    res.send("Merhaba, POST isteği attınız")
})
server.put("/hello",middleware , (req, res) => {
    res.send("Merhaba, PUT isteği attınız")
})

server.get("/hello", middleware , (req, res) => {
    res.send("Merhaba, GET isteği attınız")
});


server.delete("/hello",middleware ,  (req, res) => {
    res.send("Merhaba, DELETE isteği attınız")
})

server.listen(3000, () => {
    console.log("sunucu ayakta")
})
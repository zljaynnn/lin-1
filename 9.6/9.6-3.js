/**
 * Created by Lin on 2018/9/6.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var server = http.createServer((req, res)=> {
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname)
    var mime = getmime(extname);
    res.writeHead(200,{"Content-type":mime}+";'Access-Control-Allow-Origin':request.headers.origin");

    if (pathname == "/") {
        fs.readFile("./success.html", (err, data)=> {
            if (err) {
                fs.readFile("./404.html", (err, data)=> {
                    res.writeHead(200,{"Content-type":mime}+";'Access-Control-Allow-Origin':request.headers.origin");
                    res.end(data)
                })
            } else {
                res.end(data)
            }
        })
    } else {
        fs.readFile("./success.html", (err, data)=> {
            res.end(data)
    })
    }
    function getmime(extname) {
        switch (extname) {
            case ".html":
                return "text/html";
                break;
            case ".css":
                return "text/css";
                break;
        }
    }
}).listen(3000,"127.0.0.1")
/**
 * Created by Lin on 2018/9/6.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readdir("./albm",(err,files)=>{
        var arr=[];
        (function item(i){
            if(i==files.length){
                console.log(arr);
                return
            }
            fs.stat("./albm/"+files[i],(err,data)=>{
                if(data.isDirectory()){
arr.push(files[i]);
                }
item(i+1);
            })
        })(0)
        res.end()
    })
}).listen(3000,"127.0.0.1")
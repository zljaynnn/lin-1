/**
 * Created by Lin on 2018/9/5.
 */
var http=require("http");
var url=require("url");
var server=http.createServer((req,res)=>{
    //console.log(req.url);
    var pathName=url.parse(req.url).pathname;
    var query=url.parse(req.url,true).query;
    var name=query.name;
    //query时如果第二个参数传为true 会生成一个对象
    //console.log(pathName);// “/”后面的
    //console.log(query);// “？”后面的
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/favicon.ico"){
        return;
    }
    if(pathName=="/teacher"&&name.length==3){
        res.end("老师"+"编号"+name)
    }else if(pathName=="/student"&&name.length==3){
        res.end("学生"+"编号"+name)
    }else {
        res.end("没有这个人")
    }
}).listen(4000,"localhost")
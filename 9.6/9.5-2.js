/**
 * Created by Lin on 2018/9/5.
 */
var http=require("http");
var url=require("url");
var server=http.createServer((req,res)=>{
    var query=url.parse(req.url,true).query;
    console.log(query);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //res.end("111")
    console.log("姓名："+query.username)
    res.end("姓名："+query.username+"密码："+query.password);

}).listen(8888,"localhost");
/**
 * Created by Lin on 2018/9/6.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //fs.readFile("./1.txt",(err,data)=>{
    //    res.end(data)
    //})//读取文件

    //fs.unlink("./3.txt",(err)=>{
    //    res.end("success");
    //})//删除文件

//fs.rename("./2.txt","./alinge.txt",(err)=>{
//        res.end("名称已被成功修改")
//    })//修改名称

//fs.writeFile("./1.txt","alinge",(err,data)=>{
//
//    res.end(data);
//})//写入文件

//fs.mkdir("./albm/aa",(err,data)=>{
//    res.end();
//})//创建目录





    //fs.stat("./albm//aa",(err,data)=>{
    //
    //    if(data.isDirectory()){
    //        console.log("这是一个目录");
    //    }else{
    //        console.log("11");
    //    }
    //    res.end()
    //})//判断是否是一个目录


    //fs.readdir("./albm",(err,files)=>{
    //    console.log(files);
    //    res.end()
    //})//读取目录

/*
* 1.读取目录
* 2.判断目录里的数据和文件
* 3.遍历files
* */
if(req.url=="/favicon.ico"){
    return
}
fs.readdir("./albm",(err,files)=>{
    //建立空文件夹等待放置目录
    var arr=[];
    //迭代处理 因为开始是一个异步函数，通过迭代边恒同步函数 1执行后执行2 2执行后执行3
    (function item(i){
        if(i==files.length){
            console.log(arr);
            return;
        }
        fs.stat("./albm/"+files[i],(err,data)=>{
            if(data.isDirectory()){
                arr.push(files[i])
            }
            item(i+1)
        })
    })(0)

    //for(var i=0;i<files.length;i++){
    //    var thefile=files[i];
    //    fs.stat("./albm/"+thefile,(err,data)=>{
    //
    //        if(data.isDirectory()){
    //            arr.push(thefile)
    //            console.log(arr);
    //        }
    //    })
    //
    //}
    res.end()
})
}).listen(3000,"127.0.0.1")
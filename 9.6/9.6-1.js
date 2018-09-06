/**
 * Created by Lin on 2018/9/6.
 */
/*
* 1.根据地址栏信息 eg：/student/ 显示学员信息 并且限制ID长度
* 1.1 req.url 获取地址栏字段
* 1.2 通过正则匹配
* 2.根据地址栏信息 eg：/teacher/ 显示老师信息 并且限制ID长度
* 3.如果匹配不到 显示无此人员
*
* substring含头不含尾
* substr
* */

var http=require("http");
var server=http.createServer((req,res)=>{

    var url=req.url;


    if(req.url=="/favicon.ico"){
        return
    }

    if(url.substring(0,9)=="/student/"){
        var studentId=url.substr(9);
        if((/^[0-9]{1,9}$/).test(studentId)){
            console.log("学员Id：" + studentId);
        }else {
            console.log("学员Id不正确");
        }
    }else if(url.substring(0,9)=="/teacher/"){
        var teacherId=url.substr(9);
        if((/^[0-9]{1,9}$/).test(teacherId)){
            console.log("教师Id：" + teacherId);
        }else {
            console.log("教师Id不正确");
        }
    }else{
        console.log("none");
    }



    res.end();
}).listen(3000,"127.0.0.1")
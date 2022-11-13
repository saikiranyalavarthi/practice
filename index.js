const http =require('http');
http.createServer((req,res)=>{
res.write("<h1>hello world saikiran</h1>")
}).listen(4000,()=>console.log("server is running"))
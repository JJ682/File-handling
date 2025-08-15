//Combine 2 module usage - http and fs promise
//Write an API to read content of file, where file name is passed as query parameter
//Write an API to write some data into a file
const http = require("http")
const port = 3001;
const fs = require("fs").promises
let server = http.createServer((req,res)=>{
let url =req.url
if(url.includes("readfile")){
   fs.readFile("samp.txt","utf-8").then(data=>{
    console.log("worked",data)
    res.end(data)
}).catch(err =>{
    console.log("error",err)
    res.end(err)

}) 
}
})
server.listen(port,function(err){
    if(err){
        console.log("error",err)

    }else{
        console.log("server created")
    }
})
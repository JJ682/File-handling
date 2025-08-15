const  fs = require('fs').promises
fs.mkdir("folder","utf8").then(data=>{
    console.log("started",data)
}).catch(err=>{
    console.log("error",err)
})
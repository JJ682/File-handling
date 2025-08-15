 //import
 const fs = require('fs').promises
 // readfile
fs.readFile('sample.txt','utf8').then(result=>{
        console.log(`started`,result)
}).catch(err =>{
    console.log("error",err)
})

// writefile
fs.writeFile("promise.txt","utf8").then(result=>{
    console.log("pagecreated",result)
}).catch(err =>{
    console.log("not created",err)

})
// / delete file
// fs.unlink("promise.page","utf8").then(result=>{
//     console.log("started",result)
// }).catch(err=>{
//     console.log("error",err)
// })
//create file
fs.mkdir("world","utf8").then(data=>{
    console.log("started",data)
}).catch(err=>{
    console.log("error",err)
})

//rename file
fs.rename("promise.txt","js.txt","utf8").then(data=>{
    console.log("newpagecreated",data)
}).catch(err=>{
    console.log("not created",err)
})

//Append file
fs.appendFile("jacob.txt","hai hello world","utf-8").then(data=>{
     console.log("data added",data)
}).catch(err=>{
    console.log("not added ad ata",err)
})
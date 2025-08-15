//// create 2 files part1 and part2 where the thirds files name is stored partial in each file.


const fs = require("fs").promises
const FIRSTFILE = "part1.txt"
const SECONDFILE ="part2.txt"
const ENCODING="utf8"

fs.readFile(FIRSTFILE,ENCODING).then(data=>{
 fs.readFile(SECONDFILE,ENCODING).then(data2=>{
    fs.readFile(data + data2,ENCODING).then(result=>{
        console.log(result)
    })
 })   
})

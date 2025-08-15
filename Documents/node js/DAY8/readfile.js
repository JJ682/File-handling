// store file name in reg.txt, read reg.txt and using file name inside, read the new file

const { isUtf8 } = require('buffer')

const fs = require('fs').promises
const FILENAME = "reg.txt"
const ENCODING = "Utf8"
fs.readFile(FILENAME,ENCODING).then(data=>{
fs.readFile(data,ENCODING).then(result=>{
    console.log(result)
})

})

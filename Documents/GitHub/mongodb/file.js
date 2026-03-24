{ name:"jacob", age:"22",mark:20}





db.students.insertone({ name:"jacob", age:"22",mark:20})


db.students.insertMany([
    {name:"leo",mark:"30",age:"21"},
    {name:"irfan",mark:"40",age:"23"},
    {name:"aswin",mark:"50",age:"26"}

])

db.students.find()
db.students.find().pretty()
db.students.find({ name: "rahul" })
db.students.find({ age: { $gte: 18, $lte: 26 } })
db.students.updateOne(
  { name: "Ali" },
  { $set: { age: 22 } }
)
db.students.updateMany(
  { age: "23" },
  { $set: { course: "24" } }
)
db.students.deleteOne({ name: "aswin" })
db.students.deleteMany({ leo: "30" })
db.students.find().sort({ age: 1 })
db.students.find().sort({ name: -1 })

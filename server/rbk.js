//SCHEMA
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://omarzouaouii:omarzouaouii@cluster-mern.mc3a0.mongodb.net/RBK?retryWrites=true&w=majority", 
{useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));
//Schema of student
let RBK=new mongoose.Schema ({
    "studentName":{
        type:String,
        require:true
    },
    "Email":{
        type:String,
        require:true
    },
    "Age":{
        type:Number,
        require:true
    },
    "cohort":{
        type:String,
        require:true
    }
})

//Validation
const rbkstudents = mongoose.model('cohorts',RBK)
// rbkstudents.create({
//     "studentName": "X",
//     "Email": "x@gmail.com",
//     "Age": 53,
//     "cohort": "C3"
//   })
module.exports=rbkstudents
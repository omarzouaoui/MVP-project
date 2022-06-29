const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require("cors")
const rbkstudents=require("./rbk")

//connecting mongoose with express
// mongoose.connect("mongodb+srv://omarzouaouii:omarzouaouii@cluster-mern.mc3a0.mongodb.net/RBK?retryWrites=true&w=majority", 
// {useNewUrlParser: true})
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.log(err));

app.use(express.json())
app.use(cors())


//get data
app.get("/",(req,res)=>{
    rbkstudents.find({},(err,result)=>{
            console.log(result);
            if(err)res.send(err)
            else{res.json(result)}
        })
})
//create data
app.post("/create", async(req,res)=>{
    let student=req.body
    let newstudent=new rbkstudents(student)
    await newstudent.save()

    res.json(student)
})
//delete data
app.delete("/delete/:id",async(req,res)=>{
    await rbkstudents.findByIdAndDelete(req.params.id)
    try{
        res.status(204).json({
            status:"mriglaa",
            data:{}
        })
    }catch(err){
        res.status(500).json({
            status:"la33",
            message:err
        })
    }
});
//update
app.patch('/update/:id',async(req,res)=>{
    const updateStudent= await rbkstudents.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    try{
        res.status(200).json({
            status:'success',
            data:{
                updatePhone
            }
        })
    }catch(err){
        console.log(err);
    }
})
//port
app.listen(5000,()=>{
    console.log("tekhdem");
})
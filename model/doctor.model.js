const mongoose=require('mongoose')

const docSchema=mongoose.Schema({
    Name:{type:String, required:true},
    Imgurl:{type:URL,required:true},
    Secialization:{type:String, enum:[" Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"]},
    Experience:{type:Number, required:true},
    Location:{type:String, required:true},
    Date :{type:Date, default:Date.now},
    Slots:{type:Number, required:true},
    Fee:{type:Number, required:true}
})

const doctorModel=mongoose.model("doctor", docSchema);

module.exports ={
    doctorModel
}
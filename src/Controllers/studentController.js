const { request } = require("express");
const { findOneAndUpdate } = require("../Models/studentModel");
const studentModel = require("../Models/studentModel");
const studentController = require("../Models/studentModel")


const createdata= async function(req,res){
  let requestbody = req.body;
  const savedata = await studentModel.create(requestbody)
  return res.status(200).send({status:true, msg:"data created", Data:savedata})
}



  const getdata =async function(req,res){
    let data = req. params.userid;
    const savedata = await studentModel. find()
    return res.status(200).send({status:true, msg:"data feched", Data:savedata})
  }





const updatedata = async function (req, res) {

    let requestBody = req.body;
    let userId = req.params.userId;
    const{fname,lname,email} = requestBody;
    if (req.body.fname ||req.body.lname||req.body.email){
      const fname = req.body.fname;
      const lname = req.body.lname;
      const email= req.body.email;
      const updateduser = await studentModel.findOneAndUpdate({userId: req.params.userId },{fname:fname,lname:lname,email:email},{new:true})
      return res.status(200).send({status: true,message: "updated successfully",data:updateduser});
    }else{
      return res.status(400).send({status:false,msg:"data is not update"})
    }
}
    


     
  const deletedata = async function (req, res) {
    
      let fname = req.params.fname
      const user= await studentModel.deleteOne({fname:fname})
      return res.status(200).send({status: true,message: "successfully deleted the student",data:user});
    }
    
    
    

module.exports= {createdata,getdata,updatedata,deletedata}

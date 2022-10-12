const express= require("express")
const router = express.Router();
const StudentController= require("../Controllers/studentController");


router.post("/create",StudentController.createdata)
router.get("/getdata",StudentController.getdata)
router.put("/updatedata/:userId",StudentController.updatedata)
router.delete("/deletedata/:fname",StudentController.deletedata)














module.exports= router;
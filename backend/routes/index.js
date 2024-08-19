const express=require("express");
const router=express.Router();
const helpController=require("../controllers/help_controller");



console.log("router loaded")



router.get('/cards',helpController.getCardsDetails);
router.post("/cards",helpController.createCardsDetails);
router.get("/cards/:title",helpController.getCardByTitle);







module.exports= router;
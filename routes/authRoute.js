import express from "express";

//Creating a new express route instance
const router=express.Router();

//Get route for the Sign-in Endpoint 
router.get("/signup",(req,res) => {
    res.json({
        data:"You succcesfully Signed in",
        
    });
});

//get route for thr login endpoint
router.get("/login", (req, res) => {
  // Return a JSON response indicating that the login endpoint was hit
  res.json({
    data: "You hit login endpoint",
  });
});

//get route for thr logout endpoint
router.get("/logout", (req,res) =>{
    res.json({
        data:"You lougged out of your account",
    });
});
export default router;
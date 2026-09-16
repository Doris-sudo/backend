const register = (req, res, next) => {
   const {name, password} = req.body;

   if(name == null || password == null) {
        return res.status(400).json({
        "status": "error",
        "message": "Name and password are required"
        }) 
   }

   if(name.length < 4 || password.length < 6){
    return res.status(400).json({
        "status": "error",
        "message": "Name must be at least 4 characters and password must be at least 6 characters"
    })
   } 

   if(name != "devv" || password != "devv1234"){
    return res.status(401).json({
        "status": "error",
        "message": "Invalid name or password"
    })
//    } else {
//     return res.status(200).json({
//         "status": "success",
//         "message": "User registered successfully"
//     })
   }

  next();
};

// const register = require("../middleware/validation");

const emailSent = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Congratulations! Your account has been created successfully. Please check your email to verify your account.",
  });
};


export {register, emailSent}
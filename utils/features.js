import jwt from "jsonwebtoken";



export const sendCookie=(user,res,message,statusCode=200)=>{

     // creating token (make secret key in env)
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000/*15 min*/, 
        // frontend backend alag alag jagah or secute true or postman dont work so local host k liye "Lax ""secure none"
        sameSite : process.env.NODE_ENV === "development" ? "lax":"none",
        secure: process.env.NODE_ENV === "development"? false : true ,
    }).json({
        success: true,
        message,
    });
    

}
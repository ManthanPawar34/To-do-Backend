import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

const app = express();



config({
    path: "./models/config.env",
});

mongoose.connect(process.env.MONGO_URI, { dbname: "Backend2api", })
    .then(() => console.log("DataBase is Connected"))
    .catch((e) => console.log(e));


// using MiddleWare to decode req body or url 
app.use(express.json());

// using routes (userRouter is a name of route and adding (/user at that rout))
app.use(cookieParser());

app.use("/user", userRouter);

app.use("/task", taskRouter);

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST", "DELETE"],
    Credentials: true,
})
);



app.get("/", (req, res) => {
    res.send("Nice working");
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});


// error handler (middleware)
app.use(errorMiddleware);
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { dbConnect } from "./config/index.js";
import MainRouter from "./routes/index.js";


const app = express();
const PORT = 4000;


await dbConnect();
app.use(express.json());
app.use(morgan("tiny"));


app.use("/", MainRouter);
app.use((req, res) => {
  const params = req.params;
  const method = req.method;
  res.send({
    message: "salomat",
    params,
    method,
  });
});


app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
});


require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const router = require("./Routes/Router");
let app = express();
let Port = 8000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Internal Server Error"));
// const corsOptions = {
//   origin: "https://blogs-app.pages.dev",
//   methods: "GET,PUT,POST,DELETE",
//   credentials: true,
// }
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(Port, () => {
  console.log(`Server is running localhost ${Port}`);
});

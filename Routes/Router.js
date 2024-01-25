let express = require("express");
const Controllers = require("../Controllers/controller");
let route = express.Router();

route.get("/user", Controllers.check);

route.post("/post", Controllers.Post_Data);

route.get("/get", Controllers.Get_Data);

route.put("/user", Controllers.Put_Data);

route.delete("/delete/:id", Controllers.Delete_Data);
module.exports = route;

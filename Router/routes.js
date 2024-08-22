const experss = require("express");
const controller = require("../Controller/controller");

const routes = experss.Router();

routes.get("/", controller.localServer);
routes.post("/vlntForm", controller.formSubmit);
routes.get("/editPage/:id", controller.editPage);
routes.post("/updateTodo/:id", controller.updateTodo);
routes.get("/deleteUser/:id", controller.deleteUser);

module.exports = routes;

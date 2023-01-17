const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);    //não precisa colocar o /users porque está pegando no index.js
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);
  

module.exports = usersRoutes;
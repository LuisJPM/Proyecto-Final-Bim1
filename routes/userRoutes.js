const express = require("express");
const { getProfile, updateProfile, deleteProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Obtener perfil del usuario
router.get("/profile", authMiddleware, getProfile);

// Actualizar perfil del usuario
router.put("/profile", authMiddleware, updateProfile);

// Eliminar perfil del usuario
router.delete("/profile", authMiddleware, deleteProfile);

module.exports = router;
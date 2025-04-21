const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcont');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Erreur de session:", err);
        return res.status(500).json({ message: "Erreur lors de la déconnexion" });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Déconnexion réussie" });
    });
});
  
module.exports = router;

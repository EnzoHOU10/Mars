const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res) => {
  const { prenom_utilisateur, nom_utilisateur, email_utilisateur, mdp_utilisateur } = req.body;
  console.log("ce que j'aiiiiiiii :", req.body);
  try {
    const [existingUser] = await db.execute('SELECT * FROM utilisateur WHERE email_utilisateur = ?', [email_utilisateur]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(mdp_utilisateur, 10);
    const [result] = await db.execute(
      'INSERT INTO utilisateur (prenom_utilisateur, nom_utilisateur, email_utilisateur, mdp_utilisateur) VALUES (?, ?, ?, ?)',
      [prenom_utilisateur, nom_utilisateur, email_utilisateur, hashedPassword]
    );

    const user = {
      id_utilisateur: result.insertId,
      prenom_utilisateur,
      nom_utilisateur,
      email_utilisateur,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Compte créé avec succès :", user);
    res.status(201).json({ token, user });
  } catch (err) {
    console.error("Erreur lors de l'inscription :", err);
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

exports.login = async (req, res) => {
  const { email_utilisateur, mdp_utilisateur } = req.body;

  try {
    const [users] = await db.execute('SELECT * FROM utilisateur WHERE email_utilisateur = ?', [email_utilisateur]);
    if (users.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(mdp_utilisateur, user.mdp_utilisateur);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    const tokenPayload = {
      id_utilisateur: user.id_utilisateur,
      prenom_utilisateur: user.prenom_utilisateur,
      nom_utilisateur: user.nom_utilisateur,
      email_utilisateur: user.email_utilisateur,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Compte connecté avec succès");
    req.session.user = user;
    res.status(200).json({ token, user: tokenPayload });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

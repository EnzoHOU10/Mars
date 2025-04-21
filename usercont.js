const db = require('../models/db');
const bcrypt = require('bcrypt');

exports.updateUser = async (req, res) => {
  const { prenom_utilisateur, nom_utilisateur, email_utilisateur, mdp_utilisateur } = req.body;
  const userId = req.session.user?.id_utilisateur;
  if (!userId) {
    return res.status(401).json({ message: 'Utilisateur non connecté' });
  }
  try {
    let query = 'UPDATE utilisateur SET prenom_utilisateur = ?, nom_utilisateur = ?, email_utilisateur = ?';
    const params = [prenom_utilisateur, nom_utilisateur, email_utilisateur];
    if (mdp_utilisateur) {
      const hashedPassword = await bcrypt.hash(mdp_utilisateur, 10);
      query += ', mdp_utilisateur = ?';
      params.push(hashedPassword);
    }
    query += ' WHERE id_utilisateur = ?';
    params.push(userId);
    await db.execute(query, params);
    const [updatedUser] = await db.execute(
      'SELECT id_utilisateur, prenom_utilisateur, nom_utilisateur, email_utilisateur FROM utilisateur WHERE id_utilisateur = ?',
      [userId]
    );
    req.session.user = updatedUser[0];
    res.status(200).json(updatedUser[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

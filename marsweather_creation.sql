CREATE DATABASE marsweather;
USE marsweather;

CREATE TABLE Utilisateur (
   id_utilisateur INT AUTO_INCREMENT,
   prenom_utilisateur TEXT NOT NULL,
   nom_utilisateur TEXT NOT NULL,
   email_utilisateur TEXT NOT NULL,
   mdp_utilisateur TEXT NOT NULL,
   PRIMARY KEY(id_utilisateur)
);
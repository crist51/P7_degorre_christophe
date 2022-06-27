-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 27 juin 2022 à 12:41
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userId` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `affectation` varchar(255) DEFAULT NULL,
  `user_imageUrl` text,
  `description` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `poste` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `lastname`, `firstname`, `affectation`, `user_imageUrl`, `description`, `admin`, `poste`) VALUES
(80, '8a1d1d0fd4b5acfa487e8f110eacecb0b0ad0d68e5d4ef8fc70a66b0ac7d4578', '$2b$10$acVkW.cBqOba9fdpkXcoIOMpancivLYqghpmoL2BTspvSPyfOYsZK', 'Christophe', 'DEGORRE', 'Chêlons en Champagne', 'http://localhost:3000/images/icon.png1655753820253.png', 'Il faut croire en ce rêves', 1, 'non renseigné'),
(81, '4b3d9f6183d382cd41cf757b45a3a11a981866b32f0192aa6591d9226ea0c661', '$2b$10$jtgfsqAtTsv2bVA2kZmqlujSZNbx5aRdfT40R2ViTsW1ozx7kLoFW', 'employer', 'test', 'pas renseigné', 'http://localhost:3000/images/icon.png1655753820253.png', '', 0, 'non renseigné');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `userId` (`userId`),
  ADD KEY `email_2` (`email`),
  ADD KEY `email_3` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

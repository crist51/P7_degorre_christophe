-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 04 juil. 2022 à 15:10
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
-- Base de données : `formationgraficart`
--
CREATE DATABASE IF NOT EXISTS `formationgraficart` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `formationgraficart`;

-- --------------------------------------------------------

--
-- Structure de la table `ex_un`
--

CREATE TABLE `ex_un` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `slug` varchar(60) NOT NULL,
  `contenue` longtext NOT NULL,
  `date_create` datetime NOT NULL,
  `date_modify` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenon` varchar(255) NOT NULL,
  `sexe` varchar(1) NOT NULL DEFAULT 'h',
  `date_naissance` date NOT NULL,
  `pays` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ex_un`
--
ALTER TABLE `ex_un`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sexe` (`sexe`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ex_un`
--
ALTER TABLE `ex_un`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Base de données : `groupomania`
--
CREATE DATABASE IF NOT EXISTS `groupomania` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `groupomania`;

-- --------------------------------------------------------

--
-- Structure de la table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(10) NOT NULL,
  `gallery_titre` varchar(255) CHARACTER SET utf8 NOT NULL,
  `gallery_texte` varchar(255) DEFAULT NULL,
  `gallery_media` varchar(255) NOT NULL,
  `gallery_userId` int(11) NOT NULL,
  `gallery_dateCreate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gallery_dateUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gallery_author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_titre`, `gallery_texte`, `gallery_media`, `gallery_userId`, `gallery_dateCreate`, `gallery_dateUpdate`, `gallery_author`) VALUES
(117, 'La pattiserie recrute', 'La pâtisserie recherche 2 apprenti pour son service pour mi-aout c\'est le moment d\'en aviser votre entourage !!', 'http://localhost:3000/images/pexels-igor-ovsyannykov-205961_(1).jpg1656753683828.jpg', 80, '2022-07-02 11:21:23', '2022-07-02 11:21:23', 'DEGORRE Christophe'),
(118, 'l\'atelier a deux c\'est toujours plus marrant', 'L’entrepôt principale n\'as pas changer c\'est les meilleur sur l\'ambiance ', 'http://localhost:3000/images/pexels-alexander-isreb-1797428.jpg1656753829747.jpg', 80, '2022-07-02 11:23:49', '2022-07-02 11:23:49', 'DEGORRE Christophe'),
(119, 'Attention la jardinerie ! sa déborde', 'Dans la gallérie marchande, c\'est tout un art pour passer dans les rayon', 'http://localhost:3000/images/pexels-daria-shevtsova-880463.jpg1656753974524.jpg', 80, '2022-07-02 11:26:14', '2022-07-02 11:26:14', 'DEGORRE Christophe'),
(120, 'Philippe Etchebest arrive', 'Et non c\'est l’apprenti communication, a la cantine c\'est mexicain aujourd’hui ', 'http://localhost:3000/images/pexels-amina-filkins-5409658.jpg1656754252471.jpg', 80, '2022-07-02 11:30:52', '2022-07-02 11:30:52', 'DEGORRE Christophe'),
(121, 'Acquisition d\'un entrepôt à Château-Thierry', 'Des postes seront à pourvoir grâce a notre développement dans la région du Grand Est hésitez pas a vous rapprocher des ressource humaine si vous êtes intéressé', 'http://localhost:3000/images/pexels-pixabay-221047.jpg1656754705170.jpg', 80, '2022-07-02 11:38:25', '2022-07-02 11:39:24', 'DEGORRE Christophe'),
(122, 'Le CE propose une sortit', 'Sortit programmée à la fin de l\'année  avec les CE direction Disney Land rapprochez de leur membres pour vous inscrire ( hésitez pas à invitez votre famille)', 'http://localhost:3000/images/pexels-rick-han-3428289.jpg1656857248809.jpg', 83, '2022-07-03 16:07:29', '2022-07-03 16:07:29', 'R. Stephanie');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `post_id` int(255) NOT NULL,
  `post_titre` varchar(255) NOT NULL,
  `post_contenue` varchar(1000) NOT NULL,
  `post_dateCreate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `post_userId` int(100) NOT NULL,
  `post_dateUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `post_author` varchar(255) NOT NULL,
  `comments` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`post_id`, `post_titre`, `post_contenue`, `post_dateCreate`, `post_userId`, `post_dateUpdate`, `post_author`, `comments`) VALUES
(28, 'Résultat de l\'enquete', 'Un nouveau site social a été décidé, un appel d\'offre sera lancé d\'ici peu', '2022-06-14 10:53:01', 80, '2022-06-14 10:53:01', 'Degoore Christophe', 'null'),
(29, 'La fin de l\'appel d\'offre', 'la société CONNECT-E rejoint notre aventure pour réalisé notre projet ambitieux', '2022-06-14 12:38:54', 80, '2022-06-14 12:38:54', 'Degoore Christophe', 'null'),
(30, 'Le nouveau site social, avance', 'On peut créer et supprimer des post texte et multimédia, sa avance.', '2022-06-15 00:19:53', 80, '2022-06-15 00:19:53', 'Degoore Christophe', '{\"post_comment\": \"test32\", \"author_comment\": \"moi\"}');

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
(80, '8a1d1d0fd4b5acfa487e8f110eacecb0b0ad0d68e5d4ef8fc70a66b0ac7d4578', '$2b$10$acVkW.cBqOba9fdpkXcoIOMpancivLYqghpmoL2BTspvSPyfOYsZK', 'Christophe', 'DEGORRE', 'Chêlons-en-Champagne', 'http://localhost:3000/images/20451915_1431725706880880_3615301046010557832_o.jpg1656752733499.jpg', '\"On a jamais tord de faire une bonne action\"', 1, 'Employé'),
(83, '6b5a20fbb89e56395ec5a553b312b6c963c5648019f7c1fa0c2f7dbda2e0f709', '$2b$10$lT7VECjjV..G7LBTvxkzdeYlnFi6xuCE5hG..3cT.rgb0psTic47u', 'Stephanie', 'R.', 'France', 'http://localhost:3000/images/pexels-pixabay-415829.jpg1656751958387.jpg', '\"un pour tous et tous pour un\"', 0, 'Chef d\'équipe'),
(84, '017b1159cf8880bc6e461e4ef51a705cf104b22337e557bfe002d3af6c50b488', '$2b$10$feCWHMvFMWmDbd.1JHbWlel4arzxtewU62E4Ymp5qZCbjuFHvJGDu', 'Martin', 'HENRY', NULL, NULL, NULL, 0, NULL),
(85, '99ebdceaca4e89f096721384ac1afb91c0da4f68ffc08d448606ef2ea95b0eaf', '$2b$10$6jD2xh38on5AVtNsnb9cnO6RQLa3i7ByJX/hAgGyMkp5kwz6UzCje', 'E-comunication', 'Responsable', 'Paris', 'http://localhost:3000/images/pexels-rupinder-singh-11091518.jpg1656947046603.jpg', 'Ensemble pour un objectif commun', 0, 'administration');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`),
  ADD KEY `Galery_userId` (`gallery_userId`);

--
-- Index pour la table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_userId` (`post_userId`),
  ADD KEY `post_id` (`post_id`);

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
-- AUTO_INCREMENT pour la table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

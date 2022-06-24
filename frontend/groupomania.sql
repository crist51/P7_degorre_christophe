-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 01 juin 2022 à 15:22
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
-- Structure de la table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(10) NOT NULL,
  `gallery_titre` varchar(255) CHARACTER SET utf8 NOT NULL,
  `gallery_texte` varchar(255) DEFAULT NULL,
  `gallery_media` varchar(255) NOT NULL,
  `gallery_userId` int(11) NOT NULL,
  `gallery_dateCreate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gallery_dateUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_titre`, `gallery_texte`, `gallery_media`, `gallery_userId`, `gallery_dateCreate`, `gallery_dateUpdate`) VALUES
(1, 'userId --> 10', NULL, '', 10, '2022-05-26 08:29:42', '2022-05-26 08:29:42'),
(2, 'us11erId', NULL, 'dfzf', 12, '2022-05-30 21:37:11', '2022-05-30 21:37:11'),
(3, 'us11erId', NULL, 'dfzf', 12, '2022-05-30 21:49:56', '2022-05-30 21:49:56');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `post_id` int(255) NOT NULL,
  `post_titre` varchar(255) NOT NULL,
  `post_contenue` varchar(255) NOT NULL,
  `post_dateCreate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `post_userId` int(100) NOT NULL,
  `post_dateUpdate` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`post_id`, `post_titre`, `post_contenue`, `post_dateCreate`, `post_userId`, `post_dateUpdate`) VALUES
(1, 'titre', 'du texte', '2022-05-20 14:43:28', 1, '2022-05-23 00:00:00'),
(18, 'test', 'contenue update 3', '2022-05-25 19:01:39', 10, '2022-05-26 08:24:32'),
(19, ' Je test user101 ', 'contenue libre', '2022-05-30 17:01:57', 10, '2022-05-30 17:01:57');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userId` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `lastname`, `firstname`, `city`) VALUES
(1, 'test01@test.com', 'test', NULL, NULL, NULL),
(2, 'test02@test.com', 'test', NULL, NULL, NULL),
(7, '96a90a659d90fa8206f59e1b9ece26d51c396e89cd201128fbed9bf2f642d479', '$2b$10$9eWFWFkR6aizrGyU259kGuHuOlW13XVh0rvnCU0yIpwvU5RljxdP6', NULL, NULL, NULL),
(10, '8cf7f2548cf1c51603c6c0b6d9beb04a2ce5899affd75184c6246ae52ab54792', '$2b$10$ZS3Wc9XAWxLhRJKMwOTDie.MEFuoyWcvKinS/oyO/TiGXTzIV5hT2', 'test', 'test', 'Test'),
(11, 'ae400255196825a17dc3117889ed7d75c2249fdd559bb851fa28a00a6acd3b99', '$2b$10$QQSwxnv4koNjOWeBT1hJ8.1Qeoao1ayka2M80dEfdy8NiSIYNaehu', NULL, NULL, NULL),
(12, '8e200ce487407557310877c2fed911558c8991db3e86c5879a8d42b524f17d9e', '$2b$10$X36mr7rETnhZk5ytKxyvluBIPw97CZ1LSysZSMMbcV5XiCWf/Ndc.', NULL, NULL, NULL);

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
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

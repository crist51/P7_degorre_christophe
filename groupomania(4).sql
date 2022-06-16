-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 16 juin 2022 à 14:51
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
  `gallery_dateUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gallery_author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_titre`, `gallery_texte`, `gallery_media`, `gallery_userId`, `gallery_dateCreate`, `gallery_dateUpdate`, `gallery_author`) VALUES
(1, 'userId --> 10', NULL, '', 10, '2022-05-26 08:29:42', '2022-05-26 08:29:42', ''),
(4, 'hehe', 'hehe', '', 36, '2022-06-10 09:18:53', '2022-06-10 11:08:42', ''),
(17, 'je test', 'route authentification du create', 'http://localhost:3000/images/', 2, '2022-06-15 11:17:22', '2022-06-15 11:17:22', 'test02@test.io test'),
(18, 'test des champ reqire', 'test', 'http://localhost:3000/images/C:\\fakepath\\test.png', 2, '2022-06-15 11:35:35', '2022-06-15 11:35:35', 'test02@test.io test'),
(19, 'je test', 'je yest', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 15:59:11', '2022-06-16 15:59:11', 'test05@test.iov test'),
(20, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:10', '2022-06-16 16:04:10', 'test05@test.iov test'),
(21, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:12', '2022-06-16 16:04:12', 'test05@test.iov test'),
(22, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:13', '2022-06-16 16:04:13', 'test05@test.iov test'),
(23, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:13', '2022-06-16 16:04:13', 'test05@test.iov test'),
(24, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:13', '2022-06-16 16:04:13', 'test05@test.iov test'),
(25, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:13', '2022-06-16 16:04:13', 'test05@test.iov test'),
(26, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:33', '2022-06-16 16:04:33', 'test05@test.iov test'),
(27, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:47', '2022-06-16 16:04:47', 'test05@test.iov test'),
(28, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:04:52', '2022-06-16 16:04:52', 'test05@test.iov test'),
(29, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:06:02', '2022-06-16 16:06:02', 'test05@test.iov test'),
(30, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:06:15', '2022-06-16 16:06:15', 'test05@test.iov test'),
(31, 'tyrty', '', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:06:16', '2022-06-16 16:06:16', 'test05@test.iov test'),
(32, 'tyrty', 'fgdg', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:06:44', '2022-06-16 16:06:44', 'test05@test.iov test'),
(33, 'hrth', 'thrhr', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:07:33', '2022-06-16 16:07:33', 'test05@test.iov test'),
(34, 'test', 'test', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:13:42', '2022-06-16 16:13:42', 'test05@test.iov test'),
(35, 'tyrty', 'je test', 'http://localhost:3000/images/C:\\fakepath\\test.png', 64, '2022-06-16 16:18:43', '2022-06-16 16:18:43', 'test05@test.iov test');

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
  `post_author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`post_id`, `post_titre`, `post_contenue`, `post_dateCreate`, `post_userId`, `post_dateUpdate`, `post_author`) VALUES
(28, 'je test', 'je test author', '2022-06-14 10:53:01', 2, '2022-06-14 10:53:01', 'test02@test.io test020'),
(29, 'je test', 'authentification', '2022-06-14 12:38:54', 2, '2022-06-14 12:38:54', 'test02@test.io test020'),
(30, 'retert', 'tt', '2022-06-15 00:19:53', 2, '2022-06-15 00:19:53', 'test02@test.io test'),
(33, 'Je lance un poste', 'un msg de ouf', '2022-06-16 15:45:05', 64, '2022-06-16 15:45:05', 'test05@test.iov test');

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
  `poste` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `lastname`, `firstname`, `affectation`, `user_imageUrl`, `description`, `admin`, `poste`) VALUES
(1, 'test01@test.com', 'test', 'rajout', 'rajout', NULL, NULL, NULL, 0, ''),
(2, '7365b2ac703edc5a9d4b68047e6873aa507517befaeb9a82ea54e5ae751403f5', '$2b$10$qwE9NhyhkPdtY32hIzoaI.xEdYmJAez3L/9Nbz2ofzawkEotR8WIG', 'test', 'test02@test.io 	', 'Paris', 'http://localhost:3000/images/', 'test02@test.io', 1, ''),
(64, 'fba6bdbc7a07253d0ed299f352f97454dbc8c68c4aee068deb1f101b8b115a88', '$2b$10$OtnffRiDWheUVfqlMsnWWOiw9X1bPc4Ax9b7hW66qRWY7un/SOm0G', 'test', 'test05@test.iov', 'Paris', 'http://localhost:3000/images/', '', 0, 'Chef d\'équipe'),
(69, '9e3c633ade3da6322d7db660bb8b3790e8bbb51fa42c0766ed67f965218b45d3', '$2b$10$q9I0JrPnLzcHuE..8TTY9ubLWKZsedzhCoFkQOVT96gpS/.KTUR0a', 'test', 'test06@test.io', NULL, NULL, NULL, 0, ''),
(70, 'cb60fca8e866b314652b654ecf21f1eda61a209875c08d59b8b487c29450b490', '$2b$10$NdPvilI84Hcj3MByNj.o1.z/YLaDLfOQiQxaYW9Udm0.7qvfind3a', 'test', 'test07@test.io', NULL, NULL, NULL, 0, ''),
(71, '5a00ffd3de351cb6050319be1a881825a76924fc25da5b5c03dd31b2b0330b7e', '$2b$10$xJvmymmOqKsKnuY/rDd5bOXzvlKKJeUiDDXDj3GyAe9dn1wRG7Co.', 'test', 'test08@test.io', NULL, NULL, NULL, 0, ''),
(72, '13148f3fd7b446fab4511831ef35705a660a06638ad60fe3fd5421bdadc9ba8d', '$2b$10$J.8FXZsWtMoK/OUTQvbEyOlvDarWmDNCQ0O4hRCHJkTu/s1fGZBvK', 'test', 'test09@test.io', 'non renseigné', NULL, NULL, 0, '');

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
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

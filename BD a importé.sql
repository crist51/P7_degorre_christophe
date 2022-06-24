-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 24 juin 2022 à 14:05
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
(88, 'jghjkfhkgfhgkf', '13146', 'http://localhost:3000/images/DSC_0312.JPG1655739659507.jpg', 2, '2022-06-20 17:40:59', '2022-06-20 17:40:59', 'test02@test.io 	 test'),
(89, 'je test l\'envoie de mdessage', 'et oui c\'est ca', 'http://localhost:3000/images/DSC_0261.JPG1655813228971.jpg', 2, '2022-06-21 14:07:09', '2022-06-21 14:07:09', 'test02@test.io 	 test'),
(90, 'image', 'images pardefault\n', 'http://localhost:3000/images/icon.png1655814589710.png', 2, '2022-06-21 14:29:49', '2022-06-21 14:29:49', 'test02@test.io 	 test'),
(91, '31351', '', 'http://localhost:3000/images/logo-1.png1655818749045.png', 73, '2022-06-21 15:39:09', '2022-06-21 15:39:09', 'test03@test.io test'),
(92, 'u(-u', '(-u', 'http://localhost:3000/images/logo-black.png1655818898255.png', 73, '2022-06-21 15:41:38', '2022-06-21 15:41:38', 'test03@test.io test'),
(93, 'ommiom', 'omuoimgom', 'http://localhost:3000/images/logo-1.png1655822221567.png', 73, '2022-06-21 16:37:01', '2022-06-21 16:37:01', 'test03@test.io test'),
(94, 'ommiom', 'omuoimgom', 'http://localhost:3000/images/logo-1.png1655823297204.png', 73, '2022-06-21 16:54:57', '2022-06-21 16:54:57', 'test03@test.io test'),
(95, 'fzefkg^zerpg313', 'omuoimgom', 'http://localhost:3000/images/logo-1.png1655823312503.png', 73, '2022-06-21 16:55:12', '2022-06-21 16:55:12', 'test03@test.io test'),
(96, 'fzefkg^zerpg313', 'omuoimgom', 'http://localhost:3000/images/logo-1.png1655823776629.png', 73, '2022-06-21 17:02:56', '2022-06-21 17:02:56', 'test03@test.io test'),
(97, 'une biche', 'ert', 'http://localhost:3000/images/DSC_0090.JPG1655824525447.jpg', 73, '2022-06-21 17:15:25', '2022-06-21 17:15:25', 'test03@test.io test'),
(98, 'une biche', 'ert', 'http://localhost:3000/images/DSC_0090.JPG1655824565587.jpg', 73, '2022-06-21 17:16:05', '2022-06-21 17:16:05', 'test03@test.io test'),
(99, 'une biche', 'ert', 'http://localhost:3000/images/DSC_0090.JPG1655824765121.jpg', 73, '2022-06-21 17:19:25', '2022-06-21 17:19:25', 'test03@test.io test'),
(100, 'ours brun', 'houla j\'ai peur', 'http://localhost:3000/images/DSC_0261.JPG1655983398739.jpg', 76, '2022-06-23 13:23:19', '2022-06-23 13:23:19', 'Degoore Christophe'),
(101, 'ours brun', 'houla j\'ai peur', 'http://localhost:3000/images/DSC_0261.JPG1655983401109.jpg', 76, '2022-06-23 13:23:21', '2022-06-23 13:23:21', 'Degoore Christophe'),
(102, '631616', '616', 'http://localhost:3000/images/DSC_0261.JPG1655986586461.jpg', 76, '2022-06-23 14:16:26', '2022-06-23 14:16:26', 'Degoore Christophe'),
(103, '12', '321', 'http://localhost:3000/images/acceuill.png1655997322270.png', 78, '2022-06-23 17:15:22', '2022-06-23 17:15:22', 'test002@test.io test'),
(104, '12', '321', 'http://localhost:3000/images/acceuill.png1655997366928.png', 78, '2022-06-23 17:16:06', '2022-06-23 17:16:06', 'test002@test.io test'),
(105, '313', 'dfsdf', 'http://localhost:3000/images/Capture.PNG1656001258813.png', 78, '2022-06-23 18:20:58', '2022-06-23 18:20:58', 'test002@test.io test'),
(106, 'erzer', 'erzerz', 'http://localhost:3000/images/connect.png1656001449830.png', 78, '2022-06-23 18:24:09', '2022-06-23 18:24:09', 'test002@test.io test'),
(107, 'erzer', 'erzerz', 'http://localhost:3000/images/connect.png1656001460805.png', 78, '2022-06-23 18:24:20', '2022-06-23 18:24:20', 'test002@test.io test'),
(108, '1234', '1234', 'http://localhost:3000/images/DSC_0261.JPG1656023687843.jpg', 2, '2022-06-24 00:34:47', '2022-06-24 00:34:47', 'test02@test.i test'),
(109, 'bambi', '456', 'http://localhost:3000/images/DSC_0090.JPG1656025038874.jpg', 78, '2022-06-24 00:57:19', '2022-06-24 00:57:19', 'test002@test.io test'),
(110, '31321', '12313', 'http://localhost:3000/images/DSC_0261.JPG1656026188704.jpg', 78, '2022-06-24 01:16:28', '2022-06-24 01:16:28', 'test002@test.io test'),
(111, '1313', '3\n123\n', 'http://localhost:3000/images/DSC_0152.JPG1656026418596.jpg', 78, '2022-06-24 01:20:18', '2022-06-24 01:20:18', 'test002@test.io test');

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
(33, 'Je lance un poste', 'un msg de ouf', '2022-06-16 15:45:05', 64, '2022-06-16 15:45:05', 'test05@test.iov test'),
(34, 'je test', 'test', '2022-06-21 15:34:51', 73, '2022-06-21 15:34:51', 'test03@test.io test'),
(36, 'Pourquoi faut croire en ces reves', 'Un jour j\'étais dans un rayon de fromage et on mas dis que je sentais le fromage, j\'ai répondu changé de rayon sa sentiras meilleur...Il y as vraiment des gens...\n', '2022-06-22 17:40:39', 76, '2022-06-22 17:40:39', 'Degoore Christophe'),
(37, 'je suis le nouveau de la boite', 'employés depuis 2 jours', '2022-06-23 13:22:08', 76, '2022-06-23 13:22:08', 'Degoore Christophe');

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
(1, 'test01@test.com', 'test', 'rajout', 'rajout', NULL, 'http://localhost:3000/images/icon.png1655814589710.png', NULL, 0, ''),
(2, '7365b2ac703edc5a9d4b68047e6873aa507517befaeb9a82ea54e5ae751403f5', '$2b$10$qwE9NhyhkPdtY32hIzoaI.xEdYmJAez3L/9Nbz2ofzawkEotR8WIG', 'test', 'test02@test.i', 'Marseille', 'http://localhost:3000/images/icon.png1655814589710.png', 'test02@test.io', 1, 'Direction'),
(76, '8a1d1d0fd4b5acfa487e8f110eacecb0b0ad0d68e5d4ef8fc70a66b0ac7d4578', '$2b$10$TLPrnEs2uY8aW0EYgbt9GOyLzu9JqgHaC05BEyL9WlRcjwnbQ6Ra.', 'Christophe', 'Degoore', 'Paris', 'http://localhost:3000/images/icon.png1655753820253.png', 'Un jours je vivrai mes rêves', 0, 'Chef d\'équipe'),
(78, '6b5a20fbb89e56395ec5a553b312b6c963c5648019f7c1fa0c2f7dbda2e0f709', '$2b$10$sde.YQ4iTA9Lsk2Ro9JnkuAFjfZu6UkXRgQcdqYZ8sZqkE/Vsy.du', 'test', 'test002@test.io', NULL, 'http://localhost:3000/images/icon.png1655753820253.png', NULL, 0, NULL);

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
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE DATABASE `map-events` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 */;

CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` varchar(250) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

INSERT INTO (event) VALUES ('login'), ('buy'), ('rent');


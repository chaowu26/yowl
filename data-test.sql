-- MySQL dump 10.13  Distrib 8.0.26, for macos11.3 (x86_64)
--
-- Host: localhost    Database: yowl
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `name` varchar(255) DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES ('TIER','2021-12-02 13:19:56','NEED UPDATE',1,NULL,1),(NULL,'2021-12-02 13:37:57','TIER',2,NULL,2),('?','2021-12-02 14:35:49','?',3,1,NULL),('?','2021-12-02 14:37:49','?',4,NULL,4),('undefined','2021-12-07 09:10:58','helllo',27,NULL,NULL),('undefined','2021-12-07 09:25:12','TEST123',28,NULL,1),('undefined','2021-12-07 09:25:30','TEST254',29,NULL,2),('undefined','2021-12-07 09:30:40','HOWAR',30,NULL,2),('undefined','2021-12-07 09:36:23','COMMENTPOST',31,NULL,2),('undefined','2021-12-07 10:45:24','TEST',32,NULL,2),('undefined','2021-12-07 10:46:30','',33,NULL,2),('undefined','2021-12-07 10:48:18','',34,NULL,2),('undefined','2021-12-07 10:48:26','',35,NULL,2),('undefined','2021-12-07 10:48:37','',36,NULL,2),('undefined','2021-12-07 10:48:51','',37,NULL,2),('undefined','2021-12-07 10:48:56','',38,NULL,2),('undefined','2021-12-07 10:49:24','hz',39,NULL,29),('undefined','2021-12-07 10:50:18','',40,NULL,1),('undefined','2021-12-07 10:50:25','',41,NULL,1),('undefined','2021-12-07 10:51:47','',42,NULL,2),('undefined','2021-12-07 10:55:26','',43,NULL,2),('undefined','2021-12-07 10:56:03','',44,NULL,1),('undefined','2021-12-07 11:07:37','HELLOAGAIN',45,NULL,1),('undefined','2021-12-07 11:08:09','',46,NULL,1),('undefined','2021-12-07 11:11:37','',47,NULL,2),('undefined','2021-12-07 11:11:42','',48,NULL,2),('undefined','2021-12-07 11:11:49','',49,NULL,2),('undefined','2021-12-07 11:11:57','',50,NULL,1),('undefined','2021-12-07 11:13:38','',51,NULL,1),('undefined','2021-12-07 11:13:44','',52,NULL,1),('undefined','2021-12-07 11:13:54','',53,NULL,1),('undefined','2021-12-07 11:14:43','hi',54,NULL,1),('undefined','2021-12-07 11:25:48','BBBBN',55,NULL,1),('undefined','2021-12-07 11:28:04','',56,NULL,1),('undefined','2021-12-07 12:55:39','',57,NULL,1),('undefined','2021-12-07 13:10:00','undefined',58,1,NULL),('undefined','2021-12-07 13:10:07','jjj',59,1,NULL),('undefined','2021-12-07 13:10:27','jjj',60,1,NULL),('undefined','2021-12-07 13:10:34','d',61,1,NULL),('undefined','2021-12-07 13:11:33','jjd',62,1,NULL),('undefined','2021-12-07 13:11:48','iii',63,1,NULL),('undefined','2021-12-07 13:12:14','say itiii',64,1,NULL),('undefined','2021-12-07 13:48:25','',65,NULL,1),('undefined','2021-12-07 13:48:34','',66,NULL,1),('undefined','2021-12-07 13:48:45','',67,NULL,1),('undefined','2021-12-07 13:49:13','HELLLLO',68,1,NULL),('undefined','2021-12-07 13:50:04','',69,NULL,1),('undefined','2021-12-07 13:50:09','',70,NULL,1),('undefined','2021-12-07 13:50:12','CC',71,1,NULL),('undefined','2021-12-07 13:50:23','',72,NULL,1),('undefined','2021-12-07 13:50:25','ZU',73,28,NULL),('undefined','2021-12-07 14:01:12','gg',74,NULL,1),('undefined','2021-12-07 14:01:22','',75,NULL,1),('undefined','2021-12-07 14:12:09','',76,NULL,1),('undefined','2021-12-07 14:12:14','xxx',77,1,NULL),('undefined','2021-12-07 14:31:39','HUHUHU',78,1,NULL),('undefined','2021-12-07 14:35:53','',79,NULL,1),('undefined','2021-12-07 14:37:51','',80,NULL,1),('undefined','2021-12-07 14:38:03','',81,NULL,1),('undefined','2021-12-07 14:38:10','',82,NULL,1),('undefined','2021-12-07 14:38:15','',83,NULL,1),('undefined','2021-12-07 14:38:29','AGAINNNN',84,1,NULL),('undefined','2021-12-07 14:38:36','',85,NULL,1),('undefined','2021-12-07 14:39:39','',86,NULL,1),('undefined','2021-12-07 14:39:43','',87,NULL,1),('undefined','2021-12-07 14:39:54','',88,NULL,1),('undefined','2021-12-08 08:43:52','',90,NULL,1);
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('ANA','HELLO','WORLD','2021-12-02 09:44:54','2021-12-02 09:44:54',1),('undefined','undefined','undefined','2021-12-02 16:07:59','2021-12-02 16:07:59',2),(NULL,'hihi','ffefse','2021-12-02 16:11:26','2021-12-09 10:12:42',5),(NULL,'hihi','ffefse','2021-12-02 16:12:42','2021-12-09 10:13:58',6),(NULL,'HE','EDE','2021-12-02 16:12:42','2021-12-02 16:12:42',7),(NULL,'HE','EDE','2021-12-02 16:12:42','2021-12-02 16:12:42',8),(NULL,'HE','EDE','2021-12-02 16:12:42','2021-12-02 16:12:42',9),(NULL,'HELLLO','EARTH','2021-12-02 16:35:34','2021-12-02 16:35:34',10),(NULL,'TESTSTILL','EATRHTH EAT','2021-12-02 16:37:21','2021-12-02 16:37:21',11),(NULL,'','','2021-12-02 16:43:33','2021-12-02 16:43:33',12),(NULL,'','','2021-12-03 14:31:35','2021-12-03 14:31:35',13),(NULL,'','','2021-12-03 14:38:21','2021-12-03 14:38:21',14),(NULL,'','','2021-12-06 10:02:11','2021-12-06 10:02:11',15),(NULL,'huh','vh','2021-12-07 14:00:57','2021-12-07 14:00:57',16),(NULL,'','','2021-12-08 22:05:27','2021-12-08 22:05:27',17),(NULL,'','','2021-12-09 10:21:31','2021-12-09 10:21:31',18),('ROSEO','HZKl.com','23','2021-12-09 14:11:22','2021-12-09 14:11:22',19);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birth` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'LEOO','leoo@gmail.com',27,'zhhuangbez2910**j','France'),(2,'HAIZH','HZI@gmail.com',27,'zhhuanzzdz2910**j','France'),(3,'ANA','HZKZI@gmail.com',23,'zhhzZuanzzdz2910**j','France'),(4,'ROSEO','HZaKZI@gmail.com',23,'zhhzzZuanzzdz2910**j','France');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 15:27:21

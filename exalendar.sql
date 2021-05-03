-- This .sql was generated using dbdiagram.io. The diagram can be found in the readme / the wiki.
-- When running this file, the tables for Exalendar will BE DROPPED and then created.
-- Do NOT run this if you are not sure what you are doing.

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` varchar(255) PRIMARY KEY,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) UNIQUE NOT NULL,
  `pwd_hash` varchar(255) NOT NULL
);

DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE `user_settings` (
  `user_id` varchar(255),
  `setting_id` int,
  `value` varchar(255)
);

DROP TABLE IF EXISTS `user_classes`;
CREATE TABLE `user_classes` (
  `user_id` varchar(255),
  `class_id` int
);

DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `setting_id` int PRIMARY KEY AUTO_INCREMENT,
  `setting_name` varchar(255) UNIQUE NOT NULL,
  `setting_type` varchar(255) NOT NULL
);

DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `class_id` int PRIMARY KEY AUTO_INCREMENT,
  `class_name` varchar(255) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `class_id` int,
  `event_id` int PRIMARY KEY NOT NULL,
  `event_type` varchar(255) NOT NULL,
  `event_title` varchar(255) NOT NULL,
  `event_description` varchar(255),
  `event_date` datetime NOT NULL
);

DROP TABLE IF EXISTS `class_admins`;
CREATE TABLE `class_admins` (
  `user_id` varchar(255) NOT NULL,
  `class_id` int NOT NULL
);

ALTER TABLE `user_settings` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `user_settings` ADD FOREIGN KEY (`setting_id`) REFERENCES `settings` (`setting_id`);

ALTER TABLE `user_classes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `user_classes` ADD FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`);

ALTER TABLE `events` ADD FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`);

ALTER TABLE `class_admins` ADD FOREIGN KEY (`user_id`) REFERENCES `user_classes` (`user_id`);

ALTER TABLE `class_admins` ADD FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`);

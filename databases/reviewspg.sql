-- Table 'Reviews Results'
DROP DATABASE IF EXISTS Reviews;
CREATE DATABASE Reviews;
USE Reviews;

DROP TABLE IF EXISTS `Reviews Results`;

CREATE TABLE `Reviews Results` (
  `review_id` INTEGER NOT NULL AUTO_INCREMENT,
  `product_id` INTEGER NULL DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `summary` TEXT NULL DEFAULT NULL,
  `recommend` TINYINT NULL DEFAULT NULL,
  `response` TEXT NULL DEFAULT NULL,
  `body` TEXT NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `reviewer_name` TEXT NULL DEFAULT NULL,
  `photos` INTEGER NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `report` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`review_id`)
);

-- Table 'Reviews'

DROP TABLE IF EXISTS `Reviews`;

CREATE TABLE `Reviews` (
  `product` MEDIUMTEXT NULL AUTO_INCREMENT DEFAULT NULL,
  `page` INTEGER NULL DEFAULT NULL,
  `count` INTEGER NULL DEFAULT NULL,
  `results` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`product`)
);

-- Table 'Reviews Results Photos'

DROP TABLE IF EXISTS `Reviews Results Photos`;

CREATE TABLE `Reviews Results Photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` MEDIUMTEXT NULL DEFAULT NULL,
  `review_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Table 'Review Metadata'

DROP TABLE IF EXISTS `Review Metadata`;

CREATE TABLE `Review Metadata` (
  `product_id` TEXT NULL AUTO_INCREMENT DEFAULT NULL,
  `ratings` TEXT NULL DEFAULT NULL,
  `recommended` TEXT NULL DEFAULT NULL,
  `characteristics` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`)
);

-- Table 'Characteristics'

DROP TABLE IF EXISTS `Characteristics`;

CREATE TABLE `Characteristics` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `value` INTEGER NULL DEFAULT NULL,
  `metadata_id` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Foreign Keys

ALTER TABLE `Reviews Results` ADD FOREIGN KEY (product_id) REFERENCES `Reviews` (`product`);
ALTER TABLE `Reviews Results Photos` ADD FOREIGN KEY (review_id) REFERENCES `Reviews Results` (`review_id`);
ALTER TABLE `Characteristics` ADD FOREIGN KEY (metadata_id) REFERENCES `Review Metadata` (`product_id`);

-- Table Properties

-- ALTER TABLE `Reviews Results` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews Results Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Review Metadata` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Characteristics` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Test Data

-- INSERT INTO `Reviews Results` (`review_id`,`product_id`,`rating`,`summary`,`recommend`,`response`,`body`,`date`,`reviewer_name`,`photos`,`helpfulness`,`report`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `Reviews` (`product`,`page`,`count`,`results`) VALUES
-- ('','','','');
-- INSERT INTO `Reviews Results Photos` (`id`,`url`,`review_id`) VALUES
-- ('','','');
-- INSERT INTO `Review Metadata` (`product_id`,`ratings obj to string`,`recommended obj to string`,`characteristics`) VALUES
-- ('','','','');
-- INSERT INTO `Characteristics` (`id`,`value`,`metadata_id`) VALUES
-- ('','','');
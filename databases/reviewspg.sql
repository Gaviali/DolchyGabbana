-- Table 'Reviews Results'
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

DROP TABLE IF EXISTS  Reviews CASCADE;
-- DROP TABLE IF EXISTS  Results CASCADE;
DROP TABLE IF EXISTS  ReviewsPhotos CASCADE;
DROP TABLE IF EXISTS  Characteristics CASCADE;
DROP TABLE IF EXISTS  CharReview CASCADE;

-- Table 'Reviews' no csv file for with page or count

-- CREATE TABLE  Reviews  (
--    product_id  SERIAL PRIMARY KEY,
--    page  INT ,
--    count  INT ,
-- );

-- Table 'Reviews'

CREATE TABLE Reviews (
   review_id  SERIAL PRIMARY KEY,
   product_id  SERIAL ,
   rating  INT ,
   date  TIMESTAMPTZ, --looks like a bunch of numbers in the csv
   summary  TEXT ,
   body  TEXT ,
   recommend  BOOLEAN ,
   reported  BOOLEAN ,
   reviewer_name  TEXT ,
   reviewer_email TEXT ,
   response  TEXT ,
   helpfulness  INT ,
);

-- load csv data onto table

-- Table 'Reviews Photos'

CREATE TABLE  ReviewsPhotos  (
   photo_id  SERIAL PRIMARY KEY,
   review_id  SERIAL,
   url  TEXT ,
);

-- load csv data onto table

-- Table 'Characteristics'

CREATE TABLE  Characteristics  (
  char_id SERIAL PRIMARY KEY,
  product_id SERIAL,
  name TEXT,
);

-- load csv data onto table

-- Table 'Characteristics'

CREATE TABLE  CharReview  (
  charReview_id SERIAL PRIMARY KEY,
  chars_id SERIAL,
  review_id SERIAL,
  value INT,
);

-- load csv data onto table

-- Foreign Keys

ALTER TABLE  ReviewPhotos  ADD FOREIGN KEY (review_id) REFERENCES  Reviews  ( review_id );
ALTER TABLE  Characteristics  ADD FOREIGN KEY (product_id) REFERENCES  Reviews  ( product_id );
ALTER TABLE  CharReview ADD FOREIGN KEY (chars_id) REFERENCES Characteristics  ( char_id );
ALTER TABLE  CharReview ADD FOREIGN KEY (review_id) REFERENCES Reviews  ( review_id );

-- Table Properties

-- ALTER TABLE  Reviews Results  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE  Reviews  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE  Reviews Results Photos  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE  Review Metadata  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE  Characteristics  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Test Data

-- INSERT INTO  Reviews Results  ( review_id , product_id , rating , summary , recommend , response , body , date , reviewer_name , photos , helpfulness , report ) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO  Reviews  ( product , page , count , results ) VALUES
-- ('','','','');
-- INSERT INTO  Reviews Results Photos  ( id , url , review_id ) VALUES
-- ('','','');
-- INSERT INTO  Review Metadata  ( product_id , ratings obj to string , recommended obj to string , characteristics ) VALUES
-- ('','','','');
-- INSERT INTO  Characteristics  ( id , value , metadata_id ) VALUES
-- ('','','');
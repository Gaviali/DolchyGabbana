-- Table 'Reviews Results'
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

-- \c reviews;

DROP TABLE IF EXISTS  Reviews CASCADE;
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
   product_id  SERIAL UNIQUE,
   rating  INT ,
   date  TIMESTAMPTZ, --looks like a bunch of numbers in the csv
   summary  TEXT ,
   body  TEXT ,
   recommended  BOOLEAN ,
   reported  BOOLEAN ,
   reviewer_name  TEXT ,
   reviewer_email TEXT ,
   response  TEXT ,
   helpfulness  INT
);

-- COPY table
-- FROM 'path'
-- DELIMITER ','
-- CSV HEADER;

-- Table 'Reviews Photos'

CREATE TABLE  ReviewsPhotos  (
   photo_id  SERIAL PRIMARY KEY,
   review_id  SERIAL,
   url  TEXT
);

-- Table 'Characteristics'

CREATE TABLE  Characteristics  (
  char_id SERIAL PRIMARY KEY,
  product_id SERIAL,
  name TEXT
);

-- Copies csv file directly from file path to database
COPY Characteristics(char_id, product_id, name)
-- hello this is my file path
FROM '/Users/jeffreyzhang/Desktop/sdc/sdc data/characteristics.csv'
DELIMITER ','
CSV HEADER;

-- Table 'CharReview'

CREATE TABLE  CharReview  (
  charReview_id SERIAL PRIMARY KEY,
  chars_id SERIAL,
  review_id SERIAL,
  value INT
);

-- Foreign Keys

ALTER TABLE  ReviewsPhotos  ADD FOREIGN KEY (review_id) REFERENCES  Reviews  ( review_id );
ALTER TABLE  Characteristics  ADD FOREIGN KEY (product_id) REFERENCES  Reviews  ( product_id );
ALTER TABLE  CharReview ADD FOREIGN KEY (chars_id) REFERENCES Characteristics  ( char_id );
ALTER TABLE  CharReview ADD FOREIGN KEY (review_id) REFERENCES Reviews  ( review_id );
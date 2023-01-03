const db = require('../../databases/reviewsPg')

module.exports = {
  getReview: (cb, id) => {
    const limit = 5;
    // 'review_id', p.review_id, not needed
    // using json_agg to build photos object
    const getQuery = `
      SELECT r.*, JSON_AGG(JSON_BUILD_OBJECT
        ('photo_id', p.photo_id, 'url', p.url)) AS reviewsphotos
      FROM reviews r
        LEFT JOIN reviewsphotos p
        ON r.review_id = p.review_id
      WHERE r.product_id = ${id.product_id} AND r.reported = false
      GROUP BY r.review_id
      LIMIT ${limit}`;

    db.query(getQuery, (err, res) => {
      cb(err, res);
    });
  },
  getMeta: (cb, id) => {
    // need to use json_agg to build objects for: ratings, recommended, characteristics, objects for each characteristic name
    const getQuery = `
    SELECT * FROM characteristics, charreviews
    LIMIT 5
    `;

    db.query(getQuery, (err, res) => {
      cb(err, res);
    });
  },
  post: (cb, id) => {
    const insertResults = 'INSERT INTO Reviews (review_id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (*,*,*,*,*,*,*,*,*,*,*)';
    const insertPhotos = 'INSERT INTO ReviewsPhotos (photo_id, review_id, url) VALUES (*,*,*)';
    const resultsParam = ['serial', 'serial', 'int', 'timestamp', 'string', 'string', 'bool', 'bool', 'string', 'string', 'string', 'int'];
    const photoParam = ['int', 'int', 'string'];
    // some way to pick a set of results
    db.query(insertResults, parameters, (err, res) => {
      cb(err, res);
    })
  },
  update: (cb) => {
    const updateReview = 'UPDATE Reviews Results SET helpfulness = helpfulness + 1 WHERE product_id = product';
    const updateReport = 'UPDATE report SET report = true';
    db.query(updateReview)
  }
};
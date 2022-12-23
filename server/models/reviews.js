const db = require('../../databases/reviewspg')

module.exports = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Reviews WHERE reported = false'
    db.query(query, (err, res) => {
      callback(err, res);
    });
  },
  post: (cb) => {
    const insertResults = 'INSERT INTO Reviews (review_id, product_id, rating, date, summary, body, recommended, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (*,*,*,*,*,*,*,*,*,*,*)';
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
const db = require('../../databases/reviewspg')


//MONGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOSE
// module.exports = {
// 	functions: () => {
// 		return Database.method()
// 			.find({}).sort().exec() for find
// 			.create(input) for post
// 			.otherstuff for other methods such as findOneAndDelete or findOneAndUpdate
// 	}
// };

//MYSQL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Reviews, Reviews Results WHERE product = product_id & reported = false'
    db.query(query, (err, res) => {
      callback(err, res);
    });
  },
  post: (cb) => {
    const insertResults = 'INSERT INTO Reviews Results (`review_id`,`product_id`,`rating`,`summary`,`recommend`,`response`,`body`,`date`,`reviewer_name`,`photos`,`helpfulness`) VALUES (*,*,*,*,*,*,*,*,*,*,*)';
    const insertMeta = 'INSERT INTO `Review Metadata` (`product_id`,`ratings`,`recommended`,`characteristics`) VALUES (*,*,*,*)';
    const insertPhotos = 'INSERT INTO `Reviews Results Photos` (`id`,`url`,`review_id`) VALUES (*,*,*)';
    const resultsParam = ['int', 'int', 'int', 'string', 'string', 'string', 'string', 'date', 'string', 'photos', 'integer'];
    const metaParam = ['string', 'obj to string', 'obj to string', 'string'];
    const photoParam = ['int', 'string', 'int'];
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
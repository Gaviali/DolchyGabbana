const model = require('../models');

module.exports = {
  getReview: (req, res) => {
    console.log('parameters: ', req.params)
    model.reviews.getReview((err, modelRes) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        // formatting data object
        const data = {
          product_id: req.params.product_id,
          page: 0,
          count: modelRes.length,
          results: modelRes.rows.map((resObj, index) => {
            console.log(resObj.reviewsphotos)
            return {
              review_id: resObj.review_id,
              rating: resObj.rating,
              date: new Date(+resObj.date),
              summary: resObj.summary,
              body: resObj.body,
              recommend: resObj.recommend,
              reported: resObj.reported,
              reviewer_name: resObj.reviewer_name,
              reviewer_email: resObj.reviewer_email,
              response: resObj.response,
              // === 'null' ? JSON.parse(resObj.response) : resObj.response,
              helpfulness: resObj.helpfulness,
              photos: resObj.reviewsphotos,
            };
          }),
        };
        res.status(200).send(data);
      }
    }, req.params);
  },
  getMeta: (req, res) => {
    model.reviews.getMeta((err, metaRes) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        const data = {
          product_id: req.params.product_id,
          ratings: 'an object',
          recommended: 'an object',
          characteristics: 'a pretty crazy object',
        };
        res.status(200).send(data);
      }
    }, req.params);
  },
  post: (req, res) => {
    model.reviews.post((err, res) => {
      if (err) {
        console.error(err);
      } else {
        res.status(201).send(data);
      }
    })
  },
  put: (req, res) => {
    model.reviews.update((err, res) => {
      if (err) {
        console.error(err);
      } else {
        res.status(204).send(data);
      }
    })
  }
}
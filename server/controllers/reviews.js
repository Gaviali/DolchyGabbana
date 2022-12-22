const model = require('../models');

module.exports = {
	get: (req, res) => {
		model.reviews.getAll((err, res) => {
			if (err) {
				console.error(err);
      } else {
				res.status(200).send(data);
			}
		});
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
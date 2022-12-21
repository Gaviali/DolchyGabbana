const model = require('../models');

//MONGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOSE
// module.exports = {
// 	method: (req, res) => {
// 		model.model'sfilename.functionname()
// 			.then(() => {res.status(200).send(/* depends on the method */)) //or whatever success message
// 			.catch((err) => {res.status(404).send('some error message')}) //return whatever error message
// 	}
// }

//MYSQL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = {
	get: (req, res) => {
		model.reviews.getAll((err, res) => {
			if (err) {
				console.error(err);
      } else {
				res.send(data);
			}
		});
	},
  post: (req, res) => {
    model.reviews.post((err, res) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    })
  },
  put: (req, res) => {
    model.reviews.update((err, res) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    })
  }
}
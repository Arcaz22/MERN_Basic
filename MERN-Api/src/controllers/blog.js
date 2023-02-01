const {validationResult} = require('express-validator');

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title
  // const image = req.body.image
  const body = req.body.body

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const err = new Error('Invalid value not match');
    err.errorsStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    message: 'Create Blog Post Success',
    data: {
      post_id: 1,
      title: "title blog post",
      image: "imagefile.png",
      body: "lorem ipsum",
      create_at: "1/2/2023",
      author: {
        uid: 1,
        name: "Testing"
      }
    }
  }
  res.status(201).json(result);
}
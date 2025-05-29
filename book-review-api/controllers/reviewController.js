const Review = require('../models/reviewModel');

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const exists = await Review.findOne({ user: req.user._id, book: req.params.id });
  if (exists) return res.status(400).json({ message: 'You already reviewed this book' });
  const review = await Review.create({ book: req.params.id, user: req.user._id, rating, comment });
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  review.rating = req.body.rating;
  review.comment = req.body.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  await review.deleteOne();
  res.json({ message: 'Review deleted' });
};

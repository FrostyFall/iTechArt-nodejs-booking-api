const Joi = require('joi');

const { object, string, number } = Joi.types();

exports.addHotelSchema = object.keys({
  img: string.required().allow(null),
  title: string.min(4).required(),
  description: string.min(8).required(),
});

exports.addReviewSchema = object.keys({
  review: string.max(100).required(),
  rating: number.min(0).max(5).required(),
});

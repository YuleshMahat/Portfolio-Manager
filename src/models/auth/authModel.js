import User from "./authSchema.js";

export const createOne = (userObj) => {
  return User.create(userObj);
};

export const findByFilter = (filter) => {
  return User.findOne(filter);
};

import Skills, { ISkills } from "./skillSchema";
import { FilterQuery, UpdateQuery } from "mongoose";

export const updateByFilter = (
  filter: FilterQuery<ISkills>,
  updateObj: UpdateQuery<ISkills>
) => {
  return Skills.findOneAndUpdate(filter, updateObj, {
    upsert: true,
    new: true,
  });
};

export const findByFilter = (filter: FilterQuery<ISkills>) => {
  return Skills.findOne(filter);
};

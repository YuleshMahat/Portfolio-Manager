import mainInfo from "@/models/mainInfo/mainInfoSchema";

export const findByFilter = (filter: any) => {
  return mainInfo.findOne(filter);
};

export const updateById = (id: any, updateObj: any) => {
  return mainInfo.findByIdAndUpdate(id, updateObj, { new: true });
};

export const createNew = (infoObj: any) => {
  return mainInfo.create(infoObj);
};

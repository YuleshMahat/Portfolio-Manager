import { toast } from "react-toastify";
import { getMainInfoApi, updateMainInfoApi } from "./mainInfoApi";

interface Form {
  primaryInfo: string;
  secondaryInfo: string;
}

export const updateMainInfoAction = async (form: Form) => {
  const result = await updateMainInfoApi(form);
  if (result.status === "success") {
    toast.success(result.message);
  } else if (result.status === "error") {
    toast.error(result.message);
  } else {
    toast.info(result.message);
  }
  return result;
};

export const getMainInfoAction = async (id: string) => {
  const result = await getMainInfoApi(id);
  return result;
};

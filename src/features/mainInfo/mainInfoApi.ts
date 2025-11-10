import { apiProcessor, apiUrl } from "@/utils-fe/apiProcessor";

interface Form {
  primaryInfo: string;
  secondaryInfo: string;
}

export const updateMainInfoApi = (form: Form) => {
  return apiProcessor({
    method: "patch",
    url: `${apiUrl}/mainInfo`,
    data: form,
  });
};

export const getMainInfoApi = (id: string) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/mainInfo/${id}`,
  });
};

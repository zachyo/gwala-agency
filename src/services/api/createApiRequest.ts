import { AxiosResponse, ResponseType } from "axios";
import Axios from ".";

export interface createApiOptions {
  url: string;
  queryParams?: string;
  data?: Record<string, unknown> | FormData;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  apiOptions?: {
    responseType?: ResponseType;
    headers?: Record<string, string>;
  };
}

export const createApiRequest = async <TData>(
  options: createApiOptions
): Promise<TData> => {
  const { url, queryParams, method, data, apiOptions = {} } = options;
  const fullUrl = `${url}${queryParams ? `?${queryParams}` : ""}`;
  const token = localStorage.getItem("token");

  const { headers, ...rest } = apiOptions;
  const additionalHeaders = {
    Authorization: `Bearer ${token}`,
  };

  const updatedHeaders = {
    ...headers,
    ...additionalHeaders,
  };

  // Use updatedHeaders as needed

  const response = await Axios({
    url: fullUrl,
    method,
    //withCredentials: true,
    headers : updatedHeaders,
    ...(data ? { data: data } : {}),
    ...rest,
  })
    .then((response: AxiosResponse<TData>) => {
      return response.data; // return data only, not the whole response
    })
    .catch((error) => {
      throw error;
    });

  return response;
};

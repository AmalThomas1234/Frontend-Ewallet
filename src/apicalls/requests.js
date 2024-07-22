const { axiosInstance } = require("./index");

const API_URL = process.env.REACT_APP_API_URL;

export const GetAllRequestsByUser = async () => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/requests/get-all-requests-by-user`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const SendRequest = async (request) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/requests/send-request`,
      request
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const UpdateRequestStatus = async (request) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/requests/update-request-status`,
      request
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

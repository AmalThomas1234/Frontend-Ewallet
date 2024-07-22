const { axiosInstance } = require("./index");
const API_URL = process.env.REACT_APP_API_URL;

export const LoginUser = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/users/login`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const RegisterUser = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/users/register`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetUserInfo = async () => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/users/get-user-info`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get(
      `${API_URL}/api/users/get-all-users`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const UpdateUserVerifiedStatus = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/users/update-user-verified-status`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

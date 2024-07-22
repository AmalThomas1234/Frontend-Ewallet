const { axiosInstance } = require("./index");
const API_URL = process.env.REACT_APP_API_URL;

export const VerifyAccount = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/transactions/verify-account`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const TransferFunds = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/transactions/transfer-funds`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetTransactionsOfUser = async () => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/transactions/get-all-transactions-by-user`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const DepositFunds = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `${API_URL}/api/transactions/deposit-funds`,
      payload
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

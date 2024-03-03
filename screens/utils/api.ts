import axios from 'axios';

const axiosInstance = async (
  baseURL: string,
  method: string,
  url: string,
  headers?: {},
  body?: {},
) => {
  try {
    const response = await axios({
      baseURL: baseURL,
      method: method,
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      data: body,
    });
    return response.data; // Return the response data
  } catch (error: any) {
    throw (error.response && error.response.data) || 'Something went wrong';
  }
};

export default axiosInstance;

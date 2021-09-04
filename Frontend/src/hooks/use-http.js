import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useHttp = () => {
  const token = useSelector((state) => state.auth.token);

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendRequest = ({
    url = "",
    method = "GET",
    auth = true,
    data = null,
  }) => {
    setLoading(true);
    return axios({
      url: `${process.env.REACT_APP_BACKEND}/${url}`,
      method: method,
      headers: auth && { Authorization: `Bearer ${token}` },
      data: data,
    })
      .then((response) => {
        if (response.status.ok) {
          setData(response.data);
        } else {
          setError(response.data.error);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    data,
    error,
    loading,
    sendRequest,
  };
};

export default useHttp;

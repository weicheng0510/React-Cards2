import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

function useAxios(url) {
  const [data, setData] = useState([]);
  const add = async (restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  };
  const remove = () => setData([]);
  return [data, add, remove];
}

export default useAxios;
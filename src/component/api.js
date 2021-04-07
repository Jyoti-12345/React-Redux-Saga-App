import axios from 'axios';
export const fetchData = () => {
    try {
      const response = axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=40");
      const data = response;
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
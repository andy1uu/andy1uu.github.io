import axios from 'axios';


const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL; 


export const getUsers = async () => {
  try {
    console.log(SERVER_BASE_URL + "/users");
    const data = (await axios.get(SERVER_BASE_URL + "/users")).data;
    console.log(data);
  }
  catch (error) {
    console.log(error)
  }
};


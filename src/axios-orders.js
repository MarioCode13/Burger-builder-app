import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-burger-dba46.firebaseio.com/"
});

export default instance;

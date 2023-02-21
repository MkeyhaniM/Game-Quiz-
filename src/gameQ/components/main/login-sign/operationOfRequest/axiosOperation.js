import axios from "axios";

export let FetchPost = async (information) => {

    return axios.post("http://localhost:3001/post", {information})
        .then(response => response.data)
        .catch(error => console.log(error));
}
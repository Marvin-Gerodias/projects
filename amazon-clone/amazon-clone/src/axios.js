import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-clone-fe45f.cloudfunctions.net/api"
    // 'http://localhost:5001/clone-fe45f/us-central1/api' // the API (cloud function) URL
});

export default instance;
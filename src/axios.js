import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/health-care-5b81d/us-central1/api", // API (cloud function) URL
});

export default instance;

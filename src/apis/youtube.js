import axios from "axios";

const KEY = "AIzaSyAwz95V2BZUEZLmBNMo0T-4WTnaB60GVRs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});

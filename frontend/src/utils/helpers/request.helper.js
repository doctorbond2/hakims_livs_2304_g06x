import axios from "axios";
const BaseUrl = import.meta.env.VITE_BaseUrl;

export async function GET_REQUEST(URL) {
  return axios.get(BaseUrl + URL);
}
export async function POST_REQUEST(URL, DATA) {
  return axios.post(BaseUrl + URL, DATA, {
    headers: { "Content-Type": "application/json" },
  });
}

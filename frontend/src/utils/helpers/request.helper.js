import axios from "axios";
const BaseUrl = import.meta.env.VITE_BaseUrl;

export async function GET_REQUEST(URL) {
  console.log(URL);
  return axios.get(BaseUrl + URL);
}
export async function POST_REQUEST(URL, DATA) {
  return axios.post(BaseUrl + URL, DATA, {
    headers: { "Content-Type": "application/json" },
  });
}
export async function PUT_REQUEST(URL, DATA) {
  return axios.put(BaseUrl + URL, DATA, {
    headers: { "Content-Type": "application/json" },
  });
}
export async function DELETE_REQUEST(URL) {
  return axios.delete(BaseUrl + URL);
}
//TODO FINISH AUTH FOR BIG BAD DELETE REQUEST
export async function test_DELETE_ALL(URL, CONFIG) {
  if (!CONFIG.headers.Authorization) {
    return { error: "Invalid request." };
  }
  return axios.delete(BaseUrl + URL, CONFIG);
}

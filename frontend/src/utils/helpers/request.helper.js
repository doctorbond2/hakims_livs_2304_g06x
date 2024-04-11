import axios from "axios";
const BaseUrl = import.meta.env.VITE_BaseUrl;
const adminKey = import.meta.env.VITE_ADMIN_KEY;
const admin = axios.create({
  baseURL: BaseUrl,
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
    Authorization: adminKey,
  },
});
const regular = axios.create({
  baseURL: BaseUrl,
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});
export async function GET_REQUEST(URL) {
  return regular.get(URL);
}
export async function POST_REQUEST(URL, DATA) {
  try {
    return await regular.post(URL, DATA);
  } catch (err) {
    return "POST REQUEST ERROR: " + err.message;
  }
}
export async function PUT_REQUEST(URL, DATA) {
  return regular.put(URL, DATA);
}
//Gör om till admin senare
export async function DELETE_REQUEST(URL) {
  return regular.delete(URL);
}
//TODO FINISH AUTH FOR BIG BAD DELETE REQUEST
export async function DELETE_adminREQUEST(URL) {
  if (!adminKey) {
    return;
  }
  return admin.delete(BaseUrl + URL);
}

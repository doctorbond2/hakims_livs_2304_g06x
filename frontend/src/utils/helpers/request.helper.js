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
  try {
    const response = await regular.get(URL);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    return { error: "GET REQUEST ERROR: " + err.message };
  }
}
export async function POST_REQUEST(URL, DATA) {
  try {
    const response = await regular.post(URL, DATA);
    if (response.status === 201) {
      return { response: response, ok: "Created" };
    } else {
      return null;
    }
  } catch (err) {
    console.error({ error: "POST REQUEST ERROR: " + err.message });
    return null;
  }
}
export async function PUT_REQUEST(URL, DATA) {
  try {
    const response = await regular.put(URL, DATA);
    if (response.status === 200) {
      return { response: response, ok: "Updated" };
    } else {
      return false;
    }
  } catch (err) {
    console.error({ error: "UPDATE REQUEST ERROR: " + err.message });
    return false;
  }
}
//Gör om till admin senare
export async function DELETE_REQUEST(URL) {
  try {
    const response = await regular.delete(URL);
    if (response.status === 204) {
      return { response: response, ok: "Deleted" };
    } else {
      return false;
    }
  } catch (err) {
    console.error({ error: "DELETE REQUEST ERROR: " + err.message });
    return false;
  }
}
//TODO FINISH AUTH FOR BIG BAD DELETE REQUEST
export async function DELETE_adminREQUEST(URL) {
  if (!adminKey) {
    return { error: "Access denied." };
  }
  return admin.delete(BaseUrl + URL);
}

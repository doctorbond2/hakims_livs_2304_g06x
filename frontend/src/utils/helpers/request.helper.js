import axios from "axios";
const BaseUrl = import.meta.env.VITE_BaseUrl;

export async function GET_REQUEST(URL) {
    console.log(BaseUrl)
  try {
    const response = await axios.get(BaseUrl + URL);
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log(err.message);
  }
}

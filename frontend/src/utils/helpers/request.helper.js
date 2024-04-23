import axios from "axios";
const BaseUrl = import.meta.env.VITE_BaseUrl;
const adminKey = import.meta.env.VITE_ADMIN_KEY;
const adminCheck = () => {
  if (!adminKey || adminKey === null || adminKey === undefined) {
    throw new Error("Access denied");
  }
};
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
    throw err;
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
    throw err;
  }
}
export async function LOGIN_REQUEST(URL, DATA) {
  try {
    const response = await regular.post(URL, DATA);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Logout failed with status: ${response.status}`);
    }
  } catch (err) {
    throw err.message;
  }
}
export async function START_REQUEST(accessToken, refreshToken) {
  try {
    const response = await axios.get(BaseUrl + "/api/user/details", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `Bearer ${refreshToken}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw err;
  }
}
export async function LOGOUT_REQUEST(URL, accessToken) {
  try {
    const response = await axios.post(BaseUrl + URL, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      return { response: response, ok: "Logged out" };
    } else {
      return null;
    }
  } catch (err) {
    throw err;
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
    throw err;
  }
}

export async function DELETE_REQUEST(URL) {
  try {
    const response = await regular.delete(URL);
    if (response.status === 204) {
      return { response: response, ok: "Deleted" };
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
}

export async function admin_POST_REQUEST(URL, DATA) {
  try {
    adminCheck();
    const response = await admin.post(URL, DATA);
    if (response.status === 201) {
      return { response: response, ok: "Created" };
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
}
export async function admin_PUT_REQUEST(URL, DATA) {
  console.log(adminKey);
  try {
    adminCheck();
    const response = await admin.put(URL, DATA);
    if (response.status === 200) {
      return { response: response, ok: "Updated" };
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
}
export async function admin_GET_REQUEST(URL) {
  try {
    adminCheck();
    const response = await admin.get(URL);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
}
//Gör om till admin senare
export async function admin_DELETE_REQUEST(URL) {
  try {
    adminCheck();
    const response = await admin.delete(URL);
    if (response.status === 204) {
      return { response: response, ok: "Deleted" };
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
}
//TODO FINISH AUTH FOR BIG BAD DELETE REQUEST

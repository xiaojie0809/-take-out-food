import axios from "axios";
export default function ajax(url = "", data = {}, type = "get") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "get") {
      promise = axios.get(url, { params: { ...data } });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

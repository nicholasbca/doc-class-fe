import axios from "axios";
import FormData from "form-data"

const upload = (file, onUploadProgress, onDownloadProgress) => {
  const data = new FormData();
  data.append('file', file)
  const config = {
    method: 'post',
    url: "/api/predict",
    headers: { 
      "Content-Type": "multipart/form-data",
    },
    data : data,
    onUploadProgress,
    onDownloadProgress
  };
  return axios(config)
  // let formData = new FormData();

  // formData.append("file", file);

  // return http.post("/api/predict", formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  //   onUploadProgress,
  // });


};

export default {
  upload,
};
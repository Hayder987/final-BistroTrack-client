import axios from "axios";

const photoUpload = async (imagePath) => {
  const formdata = new FormData();
  formdata.append('image', imagePath );
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBB_Api}`,
    formdata
  );
  return data.data.display_url;
};

export { photoUpload };

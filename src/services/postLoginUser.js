import axios from "axios";
import { postDataUserLocalStorage } from "./postUserLocalStorage";

const url = "https://api-nodejs-todolist.herokuapp.com/user/";

const postLoginUser = async (form) => {
  try {
    const res = await axios.post(
      url + "/login",
      JSON.stringify({
        email: form.email,
        password: form.password,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const { _id, name, email } = res.data.user;
    const token = res.data.token;

    const avatar = await axios.get(url + `/${_id}/avatar`)
      .then(res => res.data);

      

    postDataUserLocalStorage(_id, name, email, token, avatar);

    return true;
  } catch (error) {
    return false;
  }
};

export default postLoginUser;

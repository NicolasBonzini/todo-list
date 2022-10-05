export const postDataUserLocalStorage = (id, name, email, token, avatar) => {
  const usuario = {
    id : id,
    name: name,
    email: email,
    token: token,
    avatar: avatar
  }
  localStorage.setItem("user", JSON.stringify(usuario))
};

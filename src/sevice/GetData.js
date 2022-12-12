import Api from "./Axios";

export const GetData = async () => {
  const response = await Api.get("/users");
  return response.data;
};

export const getInfoUser = async (id) => {
  const res = await Api.get(`/users/${id}`);
  return res.data;
};

export const pushData = async (path, data) => {
  return await Api.post(path, {
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
    isGraduate: data.isGraduate,
    phone: data.phone,
    school: data.school,
    gender: data.gender,
    hobby: data.hobby,
  });
};
export const deleteData = async (id) => {
  return await Api.delete(`/users/${id}`);
};

export const updateData = async (path, data) => {
  return await Api.put(path, {
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
    isGraduate: data.isGraduate,
    phone: data.phone,
    school: data.school,
    gender: data.gender,
    hobby: data.hobby,
  });
};

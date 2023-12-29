import { api } from "services/api";

export const Get = (page, pageSize = 10) => {
  return api.get(`api/CreditCard`, {
    params: {
      page,
      pageSize,
    },
  });
};

export const GetById = (id) => {
  return api.get(`api/CreditCard/${id}`);
};

export const Post = (creditcard) => {
  return api.post(`api/CreditCard`, creditcard);
};

export const Put = (creditcard) => {
  return api.put(`api/CreditCard`, creditcard);
};

export const Delete = (id) => {
  return api.delete(`api/CreditCard/${id}`);
};

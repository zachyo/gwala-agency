// import newGwalaAxios from "./axios";

import newGwalaAxios from "./axios";

const newEndpoints = {
  markAsVisited: (paymentId) =>
    newGwalaAxios.get(`/user/PaymentLink/MarkAsVisited/${paymentId}`),
  login: (payload) =>
    newGwalaAxios.post(
      `/agent/Auth/Login`,
      payload
    ),
  nameEnquiry: (payload) =>
    newGwalaAxios.post("/user/PaymentLink/NameEnquiry", payload),
  getBanks: () => newGwalaAxios.get(`/user/PaymentLink/GetBanks`),
};

export default newEndpoints;

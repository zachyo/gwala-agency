// import newGwalaAxios from "./axios";

import { newGwalaAxios } from "./axios";

const newEndpoints = {
  markAsVisited: (paymentId) =>
    newGwalaAxios.get(`/user/PaymentLink/MarkAsVisited/${paymentId}`),
  submitAttended: (paymentId, payload) =>
    newGwalaAxios.post(
      `/user/PaymentLink/SubmitAttended/${paymentId}`,
      payload
    ),
  nameEnquiry: (payload) =>
    newGwalaAxios.post("/user/PaymentLink/NameEnquiry", payload),
  getBanks: () => newGwalaAxios.get(`/user/PaymentLink/GetBanks`),
};

export default newEndpoints;

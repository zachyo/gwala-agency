
import newGwalaAxios from "./axios";

const newEndpoints = {
  markAsVisited: (paymentId) =>
    newGwalaAxios.get(`/user/PaymentLink/MarkAsVisited/${paymentId}`),
  login: (payload) => newGwalaAxios.post(`/agent/Auth/Login`, payload),
  nameEnquiry: (payload) =>
    newGwalaAxios.post("/user/PaymentLink/NameEnquiry", payload),
  getDashStats: () => newGwalaAxios.get(`/agent/Dashboard/Stats`),
  getAllAgents: () => newGwalaAxios.get(`/agent/Dashboard/Agents`),
};

export default newEndpoints;

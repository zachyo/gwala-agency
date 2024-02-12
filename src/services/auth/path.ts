import { createMutation } from "./mutation";
import { LoginResponse } from "./types";

export const keyAdmin = [`/admin/Auth/Login`];

// export const useLoginAdmin = createQuery<LoginResponse>({
//   key : keyAdmin
// });

export const useLoginAgg = createMutation<LoginResponse>({
  url: "/Auth/Login",
  method: "POST",
});

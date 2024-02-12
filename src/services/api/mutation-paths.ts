import { createMutation } from "./mutation";

export const keyAdmin = [`/admin/Auth/Login`];

// export const useLoginAdmin = createQuery<LoginResponse>({
//   key : keyAdmin
// });

// export const useBlockAccount = createMutation({
//   url: "/Block/Block",
//   method: "POST",
//   keysToRefetch: [["/Profile/Profile"]],
// });
export const useBlockAccount = createMutation({
  url: "/users/block",
  method: "POST",
  keysToRefetch: [["/profile"]],
});
export const useUnblockAccount = createMutation({
  url: "/users/unblock",
  method: "POST",
  keysToRefetch: [["/profile"]],
});

export const useResetPin = createMutation({
  url: "/ResetPin/ResetPin",
  method: "POST",
});

export const useSendMessage = createMutation({
  url: "/admin-messages",
  method: "POST",
});

export const useSendMessageGroup = createMutation({
  url: "/admin-messages/sendGroupMessage",
  method: "POST",
});

export const useSendMessageAutomated = createMutation({
  url: "/admin-messages/automated",
  method: "POST",
});

export const useDeleteMessage = createMutation({
  url: "/admin-messages",
  method: "DELETE",
});
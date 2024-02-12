import { createQuery } from "./query";
import {
  AllGroupsData,
  DashboardBillPayment,
  DashboardGroupWallet,
  DashboardPersonalWallet,
  GroupStats,
  MessageStats,
  MessagesData,
  TransData,
  TransStats,
} from "./types";

// export const singleUserKey = (arg: string) => ["All", arg];

export const useGetAllTransactions = createQuery<TransData>({
  key: ["/transactions"],
  url: "/transactions",
});
export const useFilterAllTransactions = createQuery<TransData>({
  key: ["/transactions"],
  url: "/transactions/filter",
});

export const useGetTransactionsStats = createQuery<TransStats>({
  key: ["/transactions/allStats"],
  url: "/transactions/allStats",
});

export const useGetPersonalWalletTransactionsStats =
  createQuery<DashboardPersonalWallet>({
    key: ["/transactions/personalWalletStats"],
    url: "/transactions/personalWalletStats",
  });

export const useGetGroupWalletTransactionsStats =
  createQuery<DashboardGroupWallet>({
    key: ["/transactions/groupWalletStats"],
    url: "/transactions/groupWalletStats",
  });
export const useGetBillPaymentsStats = createQuery<DashboardBillPayment>({
  key: ["/transactions/billPaymentStats"],
  url: "/transactions/billPaymentStats",
});

export const useGetAllGroups = createQuery<AllGroupsData>({
  key: ["/groups"],
  url: "/groups",
});

export const useGetGroupsStats = createQuery<GroupStats>({
  key: ["/groups/allStats"],
  url: "/groups/allStats",
});

export const useGetAdminMessages = createQuery<MessagesData>({
  key: ["/admin-messages"],
  url: "/admin-messages",
});

export const useGetAdminMessagesAuto = createQuery<MessagesData>({
  key: ["/admin-messages/automated"],
  url: "/admin-messages/automated",
});

export const useGetAdminMessagesStats = createQuery<MessageStats>({
  key: ["/admin-messages/stats"],
  url: "/admin-messages/stats",
});


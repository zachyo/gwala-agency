
import { createQuery } from "./query";
import { AggStats, AllAggsData, Allusers, GenStats, SingleUser, SingleUserStats, UserGroupsData, UserTransData } from "./types";

export const singleUserKey = (arg: string) => ["All", arg];
export const userGroups = (arg: string) => ["userGroups", arg];

export const useGetAllUsers = createQuery<Allusers>({
  key: ["allUsers"],
  url: "/users",
});
export const useFilterAllUsers = createQuery<Allusers>({
  key: ["allUsers"],
  url: "/users/filter",
});

export const useFilterAllUsersByBal = createQuery<Allusers>({
  key: ["allUsers"],
  url: "/users/balance-filter",
});

export const useGetGeneralStats = createQuery<GenStats>({
  key: ["allStats"],
  url: "/users/allStats",
});

export const useGetSingleUserStats = createQuery<SingleUserStats>({
  key: singleUserKey,
  url: "/users/singleStats",
});

export const useGetSingleUserDetails = createQuery<SingleUser>({
  key: ["/profile"],
  url: "/users/profile",
});

export const useGetSingleUserTrans = createQuery<UserTransData>({
  key: ["/userWalletTransactions"],
  url: "/users/userWalletTransactions",
});

// export const useGetSingleUserPendingTrans = createQuery<UserTransData>({
//   key: ["/PendingTransaction/PendingTransaction"],
//   url: "/PendingTransaction/PendingTransaction",
// });
export const useGetSingleUserPendingTrans = createQuery<UserTransData>({
  key: ["/userPendingTransactions"],
  url: "/users/userPendingTransactions",
});

export const useGetSingleUserGroups = createQuery<UserGroupsData>({
  key: userGroups,
  url: "/users/userGroups",
});

export const useGetAllAggregators = createQuery<AllAggsData>({
  key: ["allAggregators"],
  url: "/aggregators",
});

export const useGetAggregatorStats = createQuery<AggStats>({
  key: ["allAggregator"],
  url: "/aggregators/stats",
});

export const useGetSingleAggTrans = createQuery<Allusers>({
  key: ["aggregators/trans"],
  url: "/aggregators/trans",
});
export const useGetSingleAggStats = createQuery<SingleUserStats>({
  key: ["/aggregators/singleAggregatorStat"],
  url: "/aggregators/singleAggregatorStat",
});

export const useGetSingleAggDetails = createQuery<SingleUser>({
  key: ["/profile"],
  url: "/users/profile",
});
import { TransactionType } from "interfaces/transactions";
import { GwalaUser2 } from "interfaces/users";

// export type GenStats = {
//   totalActicePercent: number;
//   totalActiveUser: number;
//   totalRegister: number;
//   totalRegisterPercent: number;
//   totalVerified: number;
// };

export type MetaContent = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};
export type Stats = {
  value: number;
  change: number;
};
export type GenStats = {
  totalRegisteredUsers: Stats;
  totalActiveUsers: Stats;
  totalVerifiedUsers: number;
  totalUnverifiedUsers: number;
};

export type AggStats = {
  aggregatorCount: Stats;
  subAgentCount: Stats;
  totalVerifiedUsers: number;
  totalUnverifiedUsers: number;
};
// export type Allusers = {
//   currentPage: number;
//   isSorted: boolean;
//   pageSize: number;
//   sortByField: null;
//   sortDirection: number;
//   totalItems: number;
//   totalItemsOnPage: number;
//   totalPages: number;
//   content: GwalaUser2[];
// };
export type Allusers = {
  meta: MetaContent;
  content: GwalaUser2[];
};

export type SingleUserStats = {
  walletBalance: number;
  giftWalletBalance: number;
  totalGroup: number;
  totalBucket: number;
};

export type SingleUser = {
  userId: number;
  fullName: string;
  email: string;
  username: string;
  isVerified: boolean;
  profilePicture: string;
  phone: string;
  maxDailyLimitAmount: number;
  walletAmount: number;
  enableEmailNotification: true;
  enableWhatsAppNotification: true;
  lastLoginDate: string;
  pendingTransaction: number;
  dob: string;
  suspended: boolean;
  createdAt: string;
  userVirtualAccounts: [
    {
      bankCode: string;
      bankName: string;
      accountNumber: string;
      accountName: string;
    }
  ];
};

export type SingleTransData = {
  amount: number;
  createdAt: string;
  fullName: string;
  paymentSources: null;
  // productDescription?: {
  //   receiverAccount: string;
  //   remarks: string;
  //   payerBankCode: string;
  //   payerAccount: string;
  // };
  productDescription: string;
  productName: string | null;
  productOption1: string;
  productOption2: null;
  productOption3: null;
  referenceId: string;
  transChannel: string;
  transStatus: string;
  transType: string;
  transactionId: number;
};

export type UserTransData = {
  meta: MetaContent;
  content: SingleTransData[];
};

export type UserGroupsData = {
  content: UserGroupData[];
  meta: MetaContent;
};

export type UserGroupData = {
  groupId: number;
  groupName: string;
  isAdmin: boolean;
  amountContributed: number;
  targetAmount: number;
  dateJoined: string;
};

export type TransStats = {
  totalWalletBalance: Stats;
  totalActiveWalletsCount: Stats;
  totalGroupBalance: Stats;
  totalInflow: Stats;
  totalTransactionVolumn: {
    userWalletPaymentVolume: number;
    groupWalletPaymentVolume: number;
    billsPaymentVolume: number;
  };
  totalTransactionValue: {
    userWalletPaymentValue: number;
    groupWalletPaymentValue: number;
    billsPaymentValue: number;
  };
  transactionByChannel: {
    zenithTransferCount: number;
    offlinePaymentCount: number;
    cardTransferCount: number;
    primeAirtimeCount: number;
  };
};

export type TransData = {
  content : TransactionType[]
  meta : MetaContent
}

export type DashboardPersonalWallet = {
  cumulativePersonalWallet: Stats;
  bankTransferInflowCount: Stats;
  bankTransferInflowValue: Stats;
  cardInflowCount: Stats;
  cardInflowValue: Stats;
  groupInflowCount: Stats;
  groupInflowValue: Stats;
  peerInflowCount: Stats;
  peerInflowValue: Stats;
  totalInflowValue: Stats;
  totalInflowTransferFees: Stats;
  totalInflowCardFees: Stats;
  totalOutflowViaZenith: Stats;
  totalOutflowViaFlutterwave: Stats;
  totalOutflowFeesViaZenith: Stats;
  totalOutflowFeesViaFlutterwave: Stats;
  totalOutflowFees: Stats;
};

export type DashboardGroupWallet = {
  cumulativeGroupWallet: Stats;
  bankTransferInflowCount: Stats;
  bankTransferInflowValue: Stats;
  cardInflowCount: Stats;
  cardInflowValue: Stats;
  personalWalletInflowCount: Stats;
  personalWalletInflowValue: Stats;
  groupToGroupInflowCount: Stats;
  groupToGroupInflowValue: Stats;
  totalInflowValue: Stats;
  totalInflowTransferFees: Stats;
  totalInflowCardFees: Stats;
  totalOutflowValue: Stats;
  totalOutflowCount: Stats;
  totalOutflowViaZenith: Stats;
  totalOutflowViaFlutterwave: Stats;
  totalOutflowFeesViaZenith: Stats;
  totalOutflowFeesViaFlutterwave: Stats;
  totalOutflowFees: Stats;
};
export type DashboardBillPayment = {
  billTransactionAmount: Stats;
  billTransactionCount: Stats;
  electricityValue: Stats;
  electricityVolume: Stats;
  airtimeValue: Stats;
  airtimeVolume: Stats;
  mobileDateValue: Stats;
  mobileDateVolume: Stats;
  dstvGotvValue: Stats;
  dstvGotvVolume: Stats;
  showMaxValue: Stats;
  showMaxVolume: Stats;
  totalOutflowValue: Stats;
  totalOutflowCount: Stats;
};

export type GroupStats = {
  totalNumberOfGroups: Stats
  totalgroupMembers: Stats
  totalGroupWalletBalance: Stats
};

export type GroupData = {
  updatedAt: string;
  createdAt: string;
  deleted: boolean;
  groupId: number;
  name: string;
  iconPath: null;
  isCustomIcon: boolean;
  description: string;
  approvalType: number;
  isAGoal: boolean;
  targetAmount: number | null;
  walletAmount: number;
  virtualAccountReference: null;
  userId: number;
  iconId: null;
  groupTypeId: number;
  dailyLimit: number;
  dailyLimitDate: string;
  suspended: boolean;
  maxDailyLimitAmount: number;
  isTransShow: boolean;
  targetDate: null;
  groupVirtualAccounts: GroupAccountDeets[];
  memberCount : string;
};

export type AllGroupsData = {
  content: GroupData[];
  meta: MetaContent;
};

export type GroupAccountDeets = {
  accountName: string;
  accountNumber: string;
  bankCode: string;
  bankName: string;
  createdAt: string;
  deleted: boolean;
  groupId: number;
  groupVirtualAccountId: number;
  suspended: boolean;
  updatedAt: string;
  userId: null;
};

export type MessagesData = {
  sanitizedItems : MessageType[]
  meta : MetaContent
}

export type MessageType = {
  id: number
  dateSent: string
  title: string
  body: string
  deliveredTo: number
  totalRecipients: number
  groupName: string
}

export type MessageStats = {
  messagesSent: number;
  totalMessageGroups: number;
};

export type SingleAgg = {
  id: number;
  fullname: string;
  type: string;
  agentCommission: number;
  paidCommission: number;
  unpaidCommission: number;
  phone: string;
  email: string;
  state: string;
  city: string;
  bankCode: string;
  bankName: string;
  accountNumber: string;
  agentSplit: number;
  superAgentSplit: number;
  totalSubAgents: number;
  dateCreated: Date;
  lastLoginDate: Date;
};

export type AllAggsData = {
  content: SingleAgg[];
  meta: MetaContent;
};
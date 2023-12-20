import { useState } from "react";
import PendingPayouts from "../components/Payouts/PendingPayouts";
import ResolvedPayouts from "../components/Payouts/ResolvedPayouts";


const PayoutsPage = () => {
    const [tabValue, setTabValue ] = useState('pending')
  return (
    <div className="">
      {/* <PageTitle>Payouts</PageTitle> */}

      <div className="flex items-start gap-5 mb-8 mt-5">
        <h1
          className={`text-lg transition-all cursor-pointer ${
            tabValue === "pending" ? "font-bold border-b-4 border-black" : ""
          }`}
          style={{ color: `${tabValue === "pending" ? "black" : "#979797"}` }}
          onClick={() => setTabValue("pending")}
        >
          Agents Pending Payouts
        </h1>
        <h1
          className={`text-lg transition-all cursor-pointer ${
            tabValue === "resolved" ? "font-bold border-b-4  border-black" : ""
          }`}
          style={{ color: `${tabValue === "resolved" ? "black" : "#979797"}` }}
          onClick={() => setTabValue("resolved")}
        >
          Resolved Payouts
        </h1>
      </div>

      {tabValue === "pending" && <PendingPayouts />}
      {tabValue === "resolved" && <ResolvedPayouts />}
    </div>
  );
};

export default PayoutsPage;

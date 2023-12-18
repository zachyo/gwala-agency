import { useState } from "react";
import ButtonCustom from "../components/Button/Button";
import PageTitle from "../components/Typography/PageTitle";
import { Label, Input } from "@windmill/react-ui";

const SettingsPage = () => {
  const [editPayout, setEditPayout] = useState(false);
  const [editCommission, setEditCommission] = useState(false);
  return (
    <div className="">
      <PageTitle>Settings</PageTitle>
      <div
        className="bg-white pl-5 pr-8 py-8 "
        style={{ borderRadius: "10px" }}
      >
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-bold">Payout account details</h1>
          <ButtonCustom
            text={editPayout ? "Save" : "Edit"}
            color={"#273B4A"}
            newClass={"rounded-full px-8"}
            onClick={() => {
              editPayout ? setEditPayout(false) : setEditPayout(true);
            }}
          />
        </div>
        <p className="mt-5 text-lg w-11/12">
          Edit your Agency Payout account below. This account is the bank
          account where your payouts will be made when you request a payout.{" "}
        </p>
        <div className="grid gap-3 grid-cols-3 items-end mt-5 w-10/12">
          <Label>
            <span>Bank name</span>
            <Input
              name="bankName"
              type="number"
              className="mt-1"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter bank name"
              disabled={!editPayout}
              //   onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            <span>Bank account number</span>
            <Input
              name="acctNumber"
              type="number"
              className="mt-1"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter account number"
              disabled={!editPayout}
              //   onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            <span>Account name</span>
            <Input
              name="acctName"
              className="mt-1"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Account name"
              disabled={!editPayout}
              //   onChange={(e) => handleChange(e)}
            />
          </Label>
        </div>
      </div>
      <div
        className="bg-white pl-5 pr-8 py-8 mt-8"
        style={{ borderRadius: "10px" }}
      >
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-bold">Commission split</h1>
          <ButtonCustom
            text={editCommission ? "Save" : "Edit"}
            color={"#273B4A"}
            newClass={"rounded-full px-8"}
            onClick={() => {
              editCommission
                ? setEditCommission(false)
                : setEditCommission(true);
            }}
          />
        </div>
        <p className="mt-5 text-lg w-11/12">
          Commission split is how you want to share your commission between you
          and agents onboarded by you. This setting will apply for all agents
          you add unless you specify a different split when onboarding the
          agent.
        </p>
        <div className="grid gap-8 grid-cols-2 items-end mt-5 w-10/12">
          <Label>
            <span>Your commission</span>
            <Input
              name="yourCommision"
              type="number"
              className="mt-1"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter your commission"
              disabled={!editCommission}
              //   onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            <span>Agent’s commission</span>
            <Input
              name="agentCommision"
              type="number"
              className="mt-1"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter agent's commision"
              disabled={!editCommission}
              //   onChange={(e) => handleChange(e)}
            />
          </Label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

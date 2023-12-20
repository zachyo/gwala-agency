import { useState } from "react";
import ButtonCustom from "../Button/Button";
import { Label, Input } from "@windmill/react-ui";


const PayoutSettings = () => {
  const [editPayout, setEditPayout] = useState(false);

  return (
    <div className="bg-white pl-5 pr-8 py-8 " style={{ borderRadius: "10px" }}>
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
        Edit your Agency Payout account below. This account is the bank account
        where your payouts will be made when you request a payout.{" "}
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
  );
};

export default PayoutSettings;

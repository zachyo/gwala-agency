import { Label, Input } from "@windmill/react-ui";
import ButtonCustom from "../Button/Button";

const InitiatePayMe = () => {

  return (
    <div className="bg-white pl-5 pr-8 py-8" style={{ borderRadius: "10px" }}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Initiate PayMe</h1>
        <div className="flex items-center gap-2">
          <ButtonCustom
            text={"PayMe history"}
            color={"transparent"}
            newClass={"rounded-full px-8 text-blue hover:border hover:border-black"}
            tC={"#0067B4"}
          />
          <ButtonCustom
            text={"Initiate PayMe"}
            newClass={"rounded-full px-8"}
          />
        </div>
      </div>
      <p className="mt-5 text-lg w-11/12">
        Please use the form below to initiate payout into your settlement bank
        account details
      </p>
      <div className="grid gap-8 grid-cols-2 items-end mt-5 w-10/12">
        <Label>
          <span>Your commission</span>
          <Input
            name="account"
            type="number"
            className="mt-1"
            style={{ backgroundColor: "#F5F5F5" }}
            placeholder="Enter your account number"
            //   onChange={(e) => handleChange(e)}
          />
        </Label>
        <Label>
          <span>Amount to withdraw</span>
          <Input
            name="amount"
            type="number"
            className="mt-1"
            style={{ backgroundColor: "#F5F5F5" }}
            placeholder="Enter amount to withdraw"
            //   onChange={(e) => handleChange(e)}
          />
        </Label>
      </div>
    </div>
  );
};

export default InitiatePayMe;

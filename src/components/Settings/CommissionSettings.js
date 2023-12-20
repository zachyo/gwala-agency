import { useState } from "react";
import { Label, Input } from "@windmill/react-ui";
import ButtonCustom from "../Button/Button";

const CommissionSettings = () => {
  const [editCommission, setEditCommission] = useState(false);

  return (
    <div
      className="bg-white pl-5 pr-8 py-8"
      style={{ borderRadius: "10px" }}
    >
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Commission split</h1>
        <ButtonCustom
          text={editCommission ? "Save" : "Edit"}
          color={"#273B4A"}
          newClass={"rounded-full px-8"}
          onClick={() => {
            editCommission ? setEditCommission(false) : setEditCommission(true);
          }}
        />
      </div>
      <p className="mt-5 text-lg w-11/12">
        Commission split is how you want to share your commission between you
        and agents onboarded by you. This setting will apply for all agents you
        add unless you specify a different split when onboarding the agent.
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
  );
};

export default CommissionSettings;

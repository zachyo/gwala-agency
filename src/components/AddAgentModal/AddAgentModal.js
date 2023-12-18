import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Select
} from "@windmill/react-ui";
import ButtonCustom from "../Button/Button";
import SwitchCustom from "../Switch/Switch";
import Switch from "react-switch";


function AddAgentModal({ isModalOpen, closeModal }) {
    const [active, setActive] = useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(false)}>
        <ModalHeader className="-mt-6 text-center">Add an agent</ModalHeader>
        <ModalBody>
          <div className="mt-8 flex flex-col gap-4">
            <Label>
              <span>Agent name</span>
              <Input
                name="name"
                className="mt-1"
                style={{ backgroundColor: "#F5F5F5" }}
                placeholder="Enter agent's name"
                // onChange={(e) => handleChange(e)}
              />
            </Label>
            <div className="grid gap-3 grid-cols-2 items-end">
              <Label>
                <span>Agent phone number</span>
                <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Enter phone number"
                  // onChange={(e) => handleChange(e)}
                />
              </Label>
              <Label>
                <span>Agent city</span>
                <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Enter city"
                  // onChange={(e) => handleChange(e)}
                />
              </Label>
              <Label>
                <span>Agent commission split</span>
                <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Your %"
                  // onChange={(e) => handleChange(e)}
                />
              </Label>
              <Label>
                <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Agent’s %"
                  // onChange={(e) => handleChange(e)}
                />
              </Label>
            </div>
            <div className="flex justify-between items-center">
              <span>Use account level commission split</span>
              <Switch
                onChange={() => setActive(!active)}
                checked={active}
                checkedIcon={false}
                uncheckedIcon={false}
                className="switch-dash-gwala"
                onColor="#0ECB21"
                offColor="#979797"
              />
            </div>
            <hr />
            <span>Agent’s bank account details for payout</span>
            <div className="grid gap-3 grid-cols-2 items-end">
              <Label>
                <Select
                  className="mt-1"
                  //   onChange={(e) => handleChange(e)}
                  name="bankCode"
                >
                  <option defaultValue>Select the bank</option>
                  {/* {bankData?.map((bank) => (
                    <option value={bank.bankCode}>{bank.name}</option>
                  ))} */}
                  <option>$1,000</option>
                  <option>$5,000</option>
                  <option>$10,000</option>
                  <option>$25,000</option>
                </Select>
              </Label>
              <Label>
                <Input
                  name="acctNumber"
                  type="number"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Enter account number"
                  //   onChange={(e) => handleChange(e)}
                />
              </Label>
            </div>
            <p
              className="px-3 rounded-md"
              style={{
                backgroundColor: "#F5F5F5",
                paddingTop: "7.5px",
                paddingBottom: "7.5px",
                border: "1px solid #e2e8f0",
              }}
            >
              Account name
            </p>
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: "center" }}>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}

          <ButtonCustom
            text={"Save and generate referral code"}
            color={"#273B4A"}
            newClass={"rounded-full hidden sm:block w-2/4"}
          />
          <ButtonCustom
            text={"Save and generate referral code"}
            color={"#273B4A"}
            newClass={"rounded-full block w-full sm:hidden"}
          />
        </ModalFooter>
      </Modal>
    </>
  );
}

export default AddAgentModal;

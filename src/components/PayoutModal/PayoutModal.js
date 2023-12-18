import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Select,
} from "@windmill/react-ui";
import ButtonCustom from "../Button/Button";
import newEndpoints from "../../api/endpoints";

function PayoutModal({ isModalOpen, closeModal, bankData }) {
  let defaultDeets = {
    amount: 0,
    acctNumber: "",
    bankCode: "",
    acctName: "",
  };
  const [payoutDeets, setPayoutDeets] = useState(defaultDeets);
  const [isLoading, setIsLoading] = useState(false);
  const [acctErr, setAcctErr] = useState(false);

  const handleChange = (e) => {
    setPayoutDeets({ ...payoutDeets, [e.target.name]: e.target.value });
  };
  // Function to handle bank get details verification
  const handleFormSubmit = async (payload) => {
    try {
      const { data } = await newEndpoints.nameEnquiry(payload);
      if (!data?.data) {
        return;
      }
      setIsLoading(false);
      setAcctErr(false);
      setPayoutDeets({ ...payoutDeets, acctName: data.data });
    } catch (error) {
      setAcctErr(true);
      setIsLoading(false);
      setPayoutDeets({ ...payoutDeets, acctName: "" });
    }
  };

  useEffect(() => {
    console.log(payoutDeets)
    const account_number = payoutDeets.acctNumber;
    const bank_code = payoutDeets.bankCode;

    if (account_number?.length === 10 && bank_code?.length > 0) {
      setIsLoading(true);
      handleFormSubmit({
        bankCode: `${payoutDeets.bankCode}`,
        accountNumber: `${payoutDeets.acctNumber}`,
      });
      return;
    }
    if (account_number.length === 0) {
      setAcctErr(false);
      return;
    }
    if (account_number.length < 10 && account_number.length !== 0 && payoutDeets.acctName) {
      setAcctErr(true);
    }
  }, [payoutDeets.acctNumber, payoutDeets.bankCode]);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(false)}>
        <ModalHeader className="-mt-6 text-center">Pay an agent</ModalHeader>
        <ModalBody>
          <div className="mt-8 flex flex-col gap-4">
            <div className="relative">
              <Label>
                <div className="flex justify-between items-center">
                  <span>Amount to pay</span>
                </div>
                <Input
                  name="amount"
                  type="number"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="0.00"
                  onChange={(e) => handleChange(e)}
                />
              </Label>
              <div className="absolute top-0 right-0">
                <p
                  className="text-sm cursor-pointer"
                  style={{ color: "#0099AA" }}
                >
                  Pay outstanding commission
                </p>
              </div>
            </div>
            <div className="">
              <Label>
                <span>Pay money to</span>
                <Input
                  name="acctNumber"
                  type="number"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder="Enter account number"
                  onChange={(e) => handleChange(e)}
                />
              </Label>
              <div className="flex gap-2 items-end">
                <Label className="mt-1 w-1/2">
                  <Select
                    className="mt-1"
                    onChange={(e) => handleChange(e)}
                    name="bankCode"
                  >
                    <option defaultValue>Select the bank</option>
                    {bankData?.map((bank) => (
                      <option value={bank.bankCode}>{bank.name}</option>
                    ))}
                  </Select>
                </Label>
                <p
                  className="w-1/2 px-3 rounded-md"
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingTop: "7.5px",
                    paddingBottom: "7.5px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {isLoading ? "Fetching details..." : payoutDeets.acctName}
                  &nbsp;
                </p>
                {/* <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5", width: "50%" }}
                  placeholder="Account Name"
                  onChange={(e) => handleChange(e)}
                  disabled
                /> */}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: "center" }}>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}

          <ButtonCustom
            text={"Initiate agent payout"}
            color={"#273B4A"}
            newClass={"rounded-full hidden sm:block w-2/4"}
            onClick={() => console.log(payoutDeets)}
          />
          <ButtonCustom
            text={"Initiate agent payout"}
            color={"#273B4A"}
            newClass={"rounded-full block w-full sm:hidden"}
            onClick={() => console.log(payoutDeets)}
          />
        </ModalFooter>
      </Modal>
    </>
  );
}

export default PayoutModal;

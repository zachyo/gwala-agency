import React, { useState, useEffect } from "react";

import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import { CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
  Label,
  Input,
} from "@windmill/react-ui";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import ButtonCustom from "../components/Button/Button";
import PayoutModal from "../components/PayoutModal/PayoutModal";
import newEndpoints from "../api/endpoints";

function SingleAgentDeets() {
  const { id } = useParams();
  let defaultDeets = {
    name: id,
    number: "08093827839",
    city: "Lagos",
    ref: "90JK2933",
  };

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [agentDeets, setAgentDeets] = useState(defaultDeets);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBankLoading, setIsBankLoading] = useState(false);
    const [bankData, setBankData] = useState();


  // const { navigate } = useHistory

  // pagination setup
  const resultsPerPage = 7;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }
  const handleChange = (e) => {
    setAgentDeets({ ...agentDeets, [e.target.name]: e.target.value });
  };

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  useEffect(() => {
    const handleFetchBanks = async () => {
      try {
        setIsBankLoading(true);

        const { data } = await newEndpoints.getBanks();
        if (!data?.data) {
          return;
        }
        setBankData(data.data);
        setIsBankLoading(false);
      } catch (error) {
        // toast.error(
        //   "There was an error fetching banks. Please refresh the page."
        // );
      }
    };
    handleFetchBanks();

    // Check if data is already in sessionStorage
    const storedData = sessionStorage.getItem("yourDataKey");
    if (storedData) {
      // If data is present in sessionStorage, parse and set it in the state
      setData(JSON.parse(storedData));
    } else {
      // If data is not present, make the API call
      handleFetchBanks();
    }
  }, []);

  return (
    <div className="mb-12">
      <PageTitle>
        <Link to="/app/agents" className="hover:underline cursor-pointer">
          Agents
        </Link>{" "}
        / {id}
      </PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-5">
        <InfoCard title="Number of users" value="250">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total earnings" value="₦28,000.00">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Agent commision" value="19,232.00">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Paid commision" value="17,232.00">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Unpaid commision" value="2,000.00">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-6">
        <div className="col-span-3">
          <div className="flex mt-5 items-center gap-4">
            <ButtonCustom text={"Deactivate Agent"} color={"#FF0053"} />
            <ButtonCustom text={"Regenerate code"} color={"#00779F"} />
          </div>
          <div className="mt-3 bg-white px-4 py-8 pb-6 rounded-lg">
            <h1 className="font-bold text-lg text-black">{id}</h1>
            <div className="mt-4 flex flex-col gap-4">
              <Label>
                <span>Agent name</span>
                <Input
                  name="name"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder={agentDeets.name}
                  onChange={(e) => handleChange(e)}
                />
              </Label>
              <Label>
                <span>Agent phone number</span>
                <Input
                  name="number"
                  className="mt-1 bg-[#F5F5F5]"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder={agentDeets.number}
                  onChange={(e) => handleChange(e)}
                />
              </Label>
              <Label>
                <span>Agent city</span>
                <Input
                  name="city"
                  className="mt-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                  placeholder={agentDeets.city}
                  onChange={(e) => handleChange(e)}
                />
              </Label>
              <div className="relative">
                <Label>
                  <div className="flex justify-between items-center">
                    <span>Agent referral code</span>
                  </div>
                  <Input
                    name="ref"
                    className="mt-1"
                    style={{ backgroundColor: "#F5F5F5" }}
                    placeholder={agentDeets.ref}
                    onChange={(e) => handleChange(e)}
                  />
                </Label>
                <div className="absolute top-0 right-0">
                  {copied ? (
                    <p className="text-right text-red-500">copied! &#x2713;</p>
                  ) : (
                    <CopyToClipboard
                      text={`${agentDeets.ref}`}
                      onCopy={() => setCopied(true)}
                    >
                      <p
                        className="text-sm cursor-pointer"
                        style={{ color: "#0067B4" }}
                      >
                        copy code
                      </p>
                    </CopyToClipboard>
                  )}
                </div>
              </div>

              <ButtonCustom
                text={"Update information"}
                color={"#273B4A"}
                newClass={"rounded-full"}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <TableContainer>
            <div className="mx-4 my-5 mb-6 flex justify-between items-center">
              <h1 className="font-bold text-lg text-black">
                Referral earnings
              </h1>
              <ButtonCustom text={"Payout to Agent"} color={"#00779F"} onClick={()=>setIsModalOpen(true)} disabled={isBankLoading}/>
            </div>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Total earning</TableCell>
                  <TableCell>Agent’s %</TableCell>
                  <TableCell>Super agent %</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">45.00</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-center">28.00</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm cursor-pointer">17.00</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
              />
            </TableFooter>
          </TableContainer>
        </div>
      </div>
      <PayoutModal closeModal={setIsModalOpen} isModalOpen={isModalOpen} bankData={bankData} />
    </div>
  );
}

export default SingleAgentDeets;

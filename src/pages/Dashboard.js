import React, { useState, useEffect } from "react";

import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import { CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import { toast } from "react-hot-toast";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";
import SwitchCustom from "../components/Switch/Switch";
import newEndpoints from "../api/agents";
import ProgressBar from "../components/ProgressBar";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stats = async () => {
    setIsLoading(true);

    try {
      const { data } = await newEndpoints.getAllAgents();
      console.log(data);
      // toast.success(data.message);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        toast.error("Network error");
      } else {
        toast.error(error.response.data.message);
      }
      setIsLoading(false);
      return;
    }
    setIsLoading(false);

  }

  // pagination setup
  const resultsPerPage = 7;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const onSwitchChange = () => {
    setChecked(!checked)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);
  
  if (isLoading) return <ProgressBar/>

  return (
    <div className="mb-12">
      <PageTitle>Dashboard</PageTitle>
      <h1 onClick={stats}>Test</h1>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="Total agents" value="250">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total earnings" value="₦1,879.909.00">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Your commision" value="778,289.00">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Agent name</TableCell>
              <TableCell>Agent Referral Code</TableCell>
              <TableCell>Agent Status</TableCell>
              <TableCell>Referral Earnings</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">90JK2933</span>
                </TableCell>
                <TableCell>
                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                  <SwitchCustom
                    checked={user.active}
                    onChange={onSwitchChange}
                  />
                </TableCell>
                <TableCell>
                  <span className="text-sm text-center">{user.amount}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm cursor-pointer">Edit</span>
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
  );
}

export default Dashboard;

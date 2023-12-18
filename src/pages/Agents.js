import React, { useState, useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
import { SearchIcon } from "../icons";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
  Input,
} from "@windmill/react-ui";
import SwitchCustom from "../components/Switch/Switch";
import ButtonCustom from "../components/Button/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Agents() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [active, setActive] = useState(false);

  const shownData = showActive
    ? active
      ? data.filter((d) => d.active)
      : data.filter((d) => !d.active)
    : data;

  const totalResults = showActive
    ? active
      ? response.filter((d) => d.active)
      : response.filter((d) => !d.active)
    : response;

  // pagination setup
  const resultsPerPage = 7;
  const totalResultsLength = totalResults.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const onSwitchChange = () => {
    setChecked(!checked);
  };

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <div className="mb-12">
      <PageTitle>Agents</PageTitle>

      <div className="flex items-center justify-between mb-8">
        {/* <!-- Search input --> */}
        <div className="justify-center flex-1 lg:mr-32 ">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500]">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for agent by agent code, name or phone number"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ButtonCustom
            text={"Active"}
            color={"#0ECB21"}
            onClick={() => {
              setPage(1);
              setShowActive(showActive ? (active ? false : true) : true);
              setActive(true);
            }}
          />
          <ButtonCustom
            text={"Inactive"}
            color={"#FF0053"}
            onClick={() => {
              setPage(1);
              setShowActive(showActive ? (active ? true : false) : true);
              setActive(false);
            }}
          />
        </div>
      </div>

      <TableContainer>
        <Table key={showActive}>
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
            {shownData.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Link to={`agents/${user.name}`}>
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{user.name}</p>
                      </div>
                    </div>
                  </Link>
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
            totalResults={totalResultsLength}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
            key={showActive}
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
}

export default Agents;

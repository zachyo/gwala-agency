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
import { useEffect, useState } from "react";
import InfoCard from "../Cards/InfoCard";
import { MoneyIcon, PeopleIcon, SearchIcon } from "../../icons";
import RoundIcon from "../RoundIcon";
import response from "../../utils/demo/tableData";
import ButtonCustom from "../Button/Button";

const PendingPayouts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  function onPageChange(p) {
    setPage(p);
  }

  // pagination setup
  const resultsPerPage = 7;
  const totalResults = response.length;
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);
  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="Total agents owed" value="15">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total amounts owed" value="₦88,000.00">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="mt-8">
        <TableContainer>
          <div className="mx-4 my-5 mb-6 flex justify-between items-center">
            {/* <!-- Search input --> */}
            <div className="justify-center flex-1 lg:mr-32 ">
              <div className="relative w-1/2 max-w-xl mr-6 focus-within:text-purple-500]">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <SearchIcon className="w-4 h-4" aria-hidden="true" />
                </div>
                <Input
                  className="pl-8 text-gray-700"
                  placeholder="Search by name"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ButtonCustom
                text={"Pay out to all"}
                newClass={"rounded-full px-8"}
                color={"#00C514"}
              />
              <ButtonCustom
                text={"Export records"}
                newClass={"rounded-full px-8"}
                color={"#BBB5B5"}
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Agent name</TableCell>
                <TableCell>Referral Code</TableCell>
                <TableCell>Unpaid</TableCell>
                <TableCell>Action</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user, i) => (
                <TableRow key={i}>
                  <TableCell width="45%">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{user.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-center">90JK2933</span>
                  </TableCell>
                  <TableCell>
                    <span
                      className="text-sm cursor-pointer"
                      style={{ color: "#E90000" }}
                    >
                      8,902.00
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm cursor-pointer">Payout</span>
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
    </>
  );
};

export default PendingPayouts;

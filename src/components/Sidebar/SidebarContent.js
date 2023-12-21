import React, { useState } from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import logo from '../../assets/img/gwala-logo-2.svg'
import SidebarSubmenu from "./SidebarSubmenu";
import AddAgentModal from "../AddAgentModal/AddAgentModal";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-4 pt-2 text-gray-500 dark:text-gray-400">
      <a
        className=" text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
        style={{marginTop : '-100px'}}
      >
        <img src={logo} alt="" className="ml-8" style={{height : '50px'}}/>
      </a>
      <ul className="mt-8" style={{ height: "60vh" }}>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3 my-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-cool-gray-800 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                    style={{ backgroundColor: "#00779F" }}
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <button
          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
          style={{ backgroundColor: `#273B4A` }}
          onClick={()=>setIsModalOpen(true)}
        >
          Create agent
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </button>
      </div>
      <AddAgentModal
        closeModal={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default SidebarContent;

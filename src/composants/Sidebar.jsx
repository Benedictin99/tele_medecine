import React from "react";
import { TbUserCircle, TbMessage, TbBox, TbUsers } from "react-icons/tb";
import { MdWork } from "react-icons/md";

const Sidebar = () => {
  const SIDE_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: TbBox },
    { id: 2, path: "/members", name: "Membres", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: TbMessage },
    { id: 4, path: "/projets", name: "Projets", icon: MdWork },
    { id: 5, path: "/clients", name: "Client", icon: TbUserCircle },
    { id: 6, path: "/work", name: "Dashboard", icon: MdWork },
  ];
  return <div>Sidebar</div>;
};

export default Sidebar;

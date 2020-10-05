import React from "react";
import { MenuItemProps, MenuItem } from "./Menu/MenuItem";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { Theme } from "../assets/Theme";

const MENUITEMS: MenuItemProps[] = [
  {
    icon: <BsHouseDoor size={24} color={Theme.secondary} />,
    name: "OVERVIEW",
    isActive: false,
  },
  {
    icon: <AiOutlineBarChart size={24} color={Theme.highlight} />,
    name: "SALES",
    isActive: true,
  },
];

/** Page menu */
export const PageMenu = () => {
  return (
    <div className="p-4">
      {MENUITEMS.map((item: MenuItemProps) => {
        return (
          <MenuItem
            icon={item.icon}
            name={item.name}
            isActive={item.isActive}
          />
        );
      })}
    </div>
  );
};

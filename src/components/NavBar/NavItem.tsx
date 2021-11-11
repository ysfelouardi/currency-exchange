import { FC, memo, ReactNode } from "react";
import useNavBarContext from "./useNavBarContext";

export interface NavItemProps {
  title: string;
  children: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ title, children }) => {
  const { setActiveItem, activeItem } = useNavBarContext();

  return (
    <li
      {...(activeItem === title && { className: "active" })}
      onClick={() => setActiveItem(title)}
    >
      {children}
    </li>
  );
};

export default memo(NavItem);

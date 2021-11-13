import { ReactElement, useEffect, useMemo, useState } from "react";
import useEffectAfterMount from "../../hooks/useEffectAfterMount";
import { NavBarContext } from "./useNavBarContext";
import { StyledNav } from "./styles";
import NavItem from "./NavItem";

interface NavBarProps {
  children: ReactElement[];
  onItemChange?: (title: string) => void;
  defaultItem?: string;
}

const NavBar = ({
  children,
  onItemChange = () => {},
  defaultItem,
}: NavBarProps) => {
  const [activeItem, setActiveItem] = useState<string>(
    defaultItem || children[0].props.title
  );

  useEffectAfterMount(() => {
    onItemChange(activeItem);
  }, [activeItem]);

  useEffect(() => {
    defaultItem && setActiveItem(defaultItem);
  }, [defaultItem]);

  const value = useMemo(
    () => ({ activeItem, setActiveItem }),
    [activeItem, setActiveItem]
  );

  return (
    <NavBarContext.Provider value={value}>
      <StyledNav>{children}</StyledNav>
    </NavBarContext.Provider>
  );
};

NavBar.Item = NavItem;

export default NavBar;

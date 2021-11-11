import { ReactElement, useState } from "react";
import useEffectAfterMount from "../../hooks/useEffectAfterMount";
import { NavBarContext } from "./useNavBarContext";
import { StyledNav } from "./styles";
import NavItem from "./NavItem";

interface NavBarProps {
  children: ReactElement[];
  onItemChange?: (title: string) => void;
  defaultActiveItem?: string;
}

const NavBar = ({
  children,
  onItemChange = () => {},
  defaultActiveItem,
}: NavBarProps) => {
  const [activeItem, setActiveItem] = useState<string>(
    defaultActiveItem || children[0].props.title
  );

  useEffectAfterMount(() => {
    onItemChange(activeItem);
  }, [activeItem, onItemChange]);

  return (
    <NavBarContext.Provider value={{ activeItem, setActiveItem }}>
      <StyledNav>
        <ul>{children}</ul>
      </StyledNav>
    </NavBarContext.Provider>
  );
};

NavBar.Item = NavItem;

export default NavBar;

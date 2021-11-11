import { memo } from "react";
import { Logo, StyledHeader } from "./styles";
import { ReactComponent as Icon } from "../../assets/svgs/find_replace_black_24dp.svg";
import NavBar from "../NavBar";

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Icon /> Currency <strong>Exchange</strong>
      </Logo>
      <NavBar>
        <NavBar.Item title={"currencyConverter"}>
          currency converter
        </NavBar.Item>
        <NavBar.Item title={"currencyHistory"}>
          view currency history
        </NavBar.Item>
      </NavBar>
    </StyledHeader>
  );
}

export default memo(Header);

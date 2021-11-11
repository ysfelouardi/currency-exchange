import { memo } from "react";
import { Logo, StyledHeader } from "./styles";
import { ReactComponent as Icon } from "../../assets/svgs/find_replace_black_24dp.svg";

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Icon /> Currency <strong>Exchange</strong>
      </Logo>
      <h1>heading</h1>
      <h1>subheading</h1>
    </StyledHeader>
  );
}

export default memo(Header);

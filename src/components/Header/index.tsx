import { memo, useMemo } from "react";
import { Logo, StyledHeader } from "./styles";
import { ReactComponent as Icon } from "../../assets/svgs/find_replace_black_24dp.svg";
import NavBar from "../NavBar";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const defaultActiveLink = useMemo(
    () => (pathname === "/" ? "currencyConverter" : "currencyHistory"),
    [pathname]
  );

  return (
    <StyledHeader>
      <Logo>
        <Icon /> Currency <strong>Exchange</strong>
      </Logo>
      <NavBar defaultItem={defaultActiveLink}>
        <NavBar.Item title={"currencyConverter"}>
          <Link to={"/"}>currency converter</Link>
        </NavBar.Item>
        <NavBar.Item title={"currencyHistory"}>
          <Link to={"/history"}>view currency history</Link>
        </NavBar.Item>
      </NavBar>
    </StyledHeader>
  );
}

export default memo(Header);

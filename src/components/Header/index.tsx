import { memo, useCallback, useMemo } from "react";
import { Logo, StyledHeader } from "./styles";
import { ReactComponent as Icon } from "../../assets/svgs/find_replace_black_24dp.svg";
import NavBar from "../NavBar";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const defaultLink = useMemo(() => {
    if (pathname === "/") {
      return "currencyConverter";
    } else if (pathname === "/history") {
      return "currencyHistory";
    }
  }, [pathname]);

  const handleNavigation = useCallback(
    (item: string) => {
      if (item === "currencyConverter") {
        navigate("/");
      } else if (item === "currencyHistory") {
        navigate("/history");
      }
    },
    [navigate]
  );

  return (
    <StyledHeader>
      <Logo>
        <Icon /> Currency <strong>Exchange</strong>
      </Logo>
      <NavBar onItemChange={handleNavigation} defaultActiveItem={defaultLink}>
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

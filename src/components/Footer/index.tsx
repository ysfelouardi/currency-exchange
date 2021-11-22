import { memo } from "react";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <a href="https://nomics.com" target="_blank" rel="noreferrer">
        Crypto Market Cap &amp; Pricing Data Provided By Nomics
      </a>
    </StyledFooter>
  );
}

export default memo(Footer);

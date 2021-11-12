import styled from "styled-components/macro";
import { ReactComponent as SpinnerIcon } from "../../assets/svgs/spinner.svg";

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: rotate 2s linear infinite;
    z-index: 2;
    fill: black;
    width: 50px;
    height: 50px;

    circle {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default function Spinner() {
  return (
    <StyledSpinner>
      <SpinnerIcon />
    </StyledSpinner>
  );
}

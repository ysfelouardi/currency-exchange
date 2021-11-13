import styled, { keyframes } from "styled-components/macro";

const ripple = keyframes`
     0% {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
    }
    50% {
        box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
    }
    100% {
        box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
    }
`;

export const RadioWrapper = styled.div`
  margin: 16px 0;

  input[type="radio"] {
    display: none;
    &:checked + label:before {
      border-color: ${(props) => props.theme.colors.primary};
      animation: ${ripple} 0.2s linear forwards;
    }
    &:checked + label:after {
      transform: scale(1);
    }
  }

  label {
    display: inline-block;
    min-height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    text-transform: capitalize;

    &:before,
    &:after {
      position: absolute;
      content: "";
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }
    &:before {
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${(props) => props.theme.colors.gray};
    }
    &:after {
      top: calc(30px / 2 - 20px / 2);
      left: calc(30px / 2 - 20px / 2);
      width: 10px;
      height: 10px;
      transform: scale(0);
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

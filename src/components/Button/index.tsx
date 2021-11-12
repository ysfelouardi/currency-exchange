import { memo, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

function Button({
  variant = "primary",
  text,
  onClick,
  disabled = false,
  htmlType = "button",
  startIcon,
  endIcon,
}: ButtonProps) {
  return (
    <>
      <StyledButton
        type={htmlType}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
      >
        {startIcon}
        {text}
        {endIcon}
      </StyledButton>
    </>
  );
}

export default memo(Button);

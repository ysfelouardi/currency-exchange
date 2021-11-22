import { memo, ReactNode } from "react";
import Header from "../Header";
import { Container } from "./styles";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default memo(Layout);

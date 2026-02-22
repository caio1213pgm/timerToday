import BoxContainer from "../components/BoxContainer";
import Footer from "../components/layout/Footer";
import Menu from "../components/layout/Menu";
import LogoTimer from "../components/LogoTimer";

interface DefaultTemplate {
  children: React.ReactNode;
}

export default function DefaultTemplate({ children }: DefaultTemplate) {
  return (
    <>
      <BoxContainer textId="header">
        <LogoTimer />
      </BoxContainer>
      <BoxContainer textId="menu">
        <Menu />
      </BoxContainer>
      {children}
      <BoxContainer textId="footer">
        <Footer />
      </BoxContainer>
    </>
  );
}

import styled from "@emotion/styled";

const MainFooterContainer = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterText>tjfla6417@naver.com</FooterText>
      </Footer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
`;

const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6b6b;

  margin-top: 50px;
`;

const Footer = styled.div`
  background-color: #272727;
  position: absolute;
  margin-top: 50px;
  width: 100%;
  height: 100px;
`;

export default MainFooterContainer;

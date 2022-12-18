import styled from "@emotion/styled";

export interface IProps {
  text: string;
}

export const Modal = ({ text }: IProps) => (
  <ModalContainer>
    <ModalWrap>
      <Background>
        <Content>
          <p>{text}</p>
        </Content>
      </Background>
    </ModalWrap>
  </ModalContainer>
);

const ModalWrap = styled.div`
  z-index: 9;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 0.9;
  height: 180px;
  width: 300px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 28px;
  font-family: "NotoSansKR";
  padding: 40px;
  color: white;
`;

import styled from "@emotion/styled";
export interface IProps {
  height: string;
  width: string;
  padding: string;
  content: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  border?: string;
  buttonFunction?: () => void;
}

interface ShareButton {
  backgroundColor: string;
  padding: string;
  color: string;
  fontSize: string;
  width: string;
}

const Button = ({
  height,
  width,
  color,
  content,
  backgroundColor,
  padding,
  fontSize,
  buttonFunction,
}: IProps) => {
  return (
    <ShareButtons
      backgroundColor={backgroundColor}
      padding={padding}
      color={color}
      fontSize={fontSize}
      onClick={buttonFunction}
      width={width}
    >
      {content}
    </ShareButtons>
  );
};

const ShareButtons = styled.button<ShareButton>`
  width: ${(props) => props.width};
  font-family: "NotoSansKR";
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: 1px solid rgb(160, 160, 160);
  border-radius: 4px;
`;

export default Button;

import MainHeaderContainer from "../container/layout/MainHeaderContainer";
import MainFooterContainer from "../container/layout/MainFooterContainer";

export interface IProps {
  children: React.ReactNode;
}
const LayoutContainer = ({ children }: IProps) => {
  return (
    <>
      <MainHeaderContainer />
      {children}
      <MainFooterContainer />
    </>
  );
};

export default LayoutContainer;

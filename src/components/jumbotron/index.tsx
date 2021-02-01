import { ReactNode, HTMLAttributes, ImgHTMLAttributes } from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

type JumbotronProps = {
  children: ReactNode;
  direction: string;
};

const Jumbotron = ({ direction = "row", children }: JumbotronProps) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

export type CustomProps = {
  children?: ReactNode;
};

type ContainerProps = HTMLAttributes<HTMLDivElement> | CustomProps;

type TextProps = HTMLAttributes<HTMLHeadingElement> | CustomProps;

Jumbotron.Container = function JumbotronContainer({
  children,
  ...props
}: ContainerProps) {
  return <Container {...props}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({
  children,
  ...props
}: ContainerProps) {
  return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }: TextProps) {
  return <Title {...props}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...props
}: TextProps) {
  return <SubTitle {...props}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <Image {...props} />;
};

export default Jumbotron;

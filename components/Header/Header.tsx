import styled from "styled-components";
import CartButton from "@/components/CartButton/CartButton";

const Title = styled.h1`
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 8px;
`;

const Subtitle = styled.h2`
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-height: 3rem;
  background: ${(props) => props.theme.main.color.primary};
`;

export interface HeaderProps {
  onOpenCart: () => void;
}

const Header = ({ onOpenCart }: HeaderProps) => (
  <Container>
    <div>
      <Title>MKS</Title>
      <Subtitle>Sistemas</Subtitle>
    </div>
    <CartButton onClick={onOpenCart} />
  </Container>
);

export default Header;

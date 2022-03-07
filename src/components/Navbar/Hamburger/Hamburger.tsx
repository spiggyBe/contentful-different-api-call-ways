import { useState } from 'react';
import styled from 'styled-components';

interface IHamburger {
  open: boolean;
}

const StyledHamburger = styled.div<IHamburger>`
  width: 40px;
  height: 40px;
  z-index: 20;
  position: absolute;
  top: 65px;
  right: 50px;
  display: none;
  cursor: pointer;
  @media (max-width: 960px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`

const BurgerLines = styled.div<IHamburger>`
    width: 40px;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`

interface HamburgerProps {
  toggleMenu: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledHamburger
        open={open}
        onClick={() => {
          setOpen(!open)
          toggleMenu()
        }
        }
      >
        <BurgerLines open={open} />
        <BurgerLines open={open} />
        <BurgerLines open={open} />
      </StyledHamburger>
    </>
  )
}

export default Hamburger
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../assets';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  return (
    <React.Fragment>
      <Container>
        <InnerContainer>
          <NavLink href='/'>
            <Logo />
          </NavLink>
          <NavLinks>
            <NavLink href='#'>Case Studies</NavLink>
            <NavLink href='#'>Contact</NavLink>
            <ThemeSwitch />
          </NavLinks>
        </InnerContainer>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  z-index: 25;
  user-select: none;

  svg {
    height: 36px;
    width: 36px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  height: fit-content;
`;

const NavLink = styled.a`
  position: relative;
  text-align: center;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: var(--font-color);

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 0;
    left: auto;
    width: 0;
    height: 3px;
    z-index: 2;
  }

  &::before {
    background-color: var(--light-blue);
    transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
  }
  &::after {
    background-color: var(--dark-red);
    transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

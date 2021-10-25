import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import logo from '../res/logo.svg';

const breakpoint = 900;

const Wrapper = styled.div`
  width: 100%;
  background-color: #1d1d1d;
`;

const Container = styled.header`
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    margin: auto;
  };
  @media only screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  };
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  };
`;

const ContainerLogoHamb = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(1);
  @media only screen and (max-width: 900px) {
    width: 2rem;
  };
`;

const Hamburger = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: auto;
  margin-right: 0;
  display: ${(props) => (props.width <= breakpoint ? null : 'none')};
`;

const Line = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
  &:nth-child(1) {
    transform: ${(props) => (props.menu ? 'translateY(8px) rotate(45deg)' : 'none')};
  }
  &:nth-child(2) {
    opacity: ${(props) => (props.menu ? '0' : 'none')};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.menu ? 'translateY(-8px) rotate(-45deg)' : 'none')};
  }
`;

const ElementList = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    transition: ${(props) => (props.active ? '0.3s ease out' : 'none')};
    opacity: ${(props) => (props.active ? '1' : '0')};
    top: 0;
    flex-direction: column;
    background-color: #28292d;
    text-align: center;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 0px;
  };
`;

const Element = styled.div`
  list-style: none;
  padding: 10px;
`;

const ElementContent = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: #d7dbd8;
  &:hover {
    color: white;
  }
`;

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  if (width > breakpoint && menu) {
    setMenu(!menu);
  }

  return (
    <Wrapper>
      <Container>
        <ContainerLogoHamb>
          <Logo src={logo} />
          <Hamburger width={width} onClick={handleClick}>
            <Line id="1" menu={menu} />
            <Line id="2" menu={menu} />
            <Line id="3" menu={menu} />
          </Hamburger>
        </ContainerLogoHamb>
        <ElementList active={menu}>
          <Element>
            <ElementContent>About me</ElementContent>
          </Element>
          <Element>
            <ElementContent>Education</ElementContent>
          </Element>
          <Element>
            <ElementContent>Projects</ElementContent>
          </Element>
        </ElementList>
      </Container>
    </Wrapper>
  );
};

export default Header;

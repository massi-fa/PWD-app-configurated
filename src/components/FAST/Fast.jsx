import React, { useState } from 'react';
import styled from 'styled-components';

import Questions from './Questions';

import icon from '../../res/iconFasty.png';

const Container = styled.div`
  position: fixed;
`;

const ContainerButton = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 5%;
  right: 5%;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  background-color: transparent;
  border: none;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Fast = () => {
  const [active, setActive] = useState(true);
  const click = () => (
    setActive(!active)
  );
  return (
    <Container>
      {active === false
        ? (
          <>
            <Questions click={click} />
          </>
        )
        : (
          <>
            <ContainerButton>
              <Button onClick={click}>
                <Img src={icon} />
              </Button>
            </ContainerButton>
          </>
        )}
    </Container>
  );
};

export default Fast;

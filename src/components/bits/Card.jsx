import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
  text-decoration: none;
`;

const Container = styled.div`
  width: 15rem;
  min-width: 180px;
  height: 10rem;
  border: 1px solid;
  border-radius: 15px;
  border-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 1.3rem;
  margin: auto;
  color: #d7dbd8;
`;

const ContainerLogos = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Image = styled.img`
  height: 2rem;
  margin: auto 5px auto 5px;
`;
const Description = styled.h2`
  font-size: 0.8rem;
  margin: auto;
  color: #d7dbd8;
`;

const Card = ({
  name, logos, description, link,
}) => (
  <Wrapper href={link}>
    <Container>
      <Name>{name}</Name>
      <ContainerLogos>
        {
          logos.map((element) => (
            <Image src={element.image} key={element.id} />
          ))
        }
      </ContainerLogos>
      <Description>{description}</Description>
    </Container>
  </Wrapper>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
  })).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;

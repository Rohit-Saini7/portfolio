import React from 'react';
import styled from 'styled-components';
import { Logo } from '../assets';

const Home = () => {
  return (
    <Container>
      <MainContainer>
        <ContentContainer>
          <ContentItem>
            <Heading>Rohit Saini</Heading>
          </ContentItem>
          <ContentItem>
            <SubHeading>
              A React Front-end Developer, Gamer, Technophile & Hodophile.
            </SubHeading>
          </ContentItem>
        </ContentContainer>
      </MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
};

export default Home;

const Container = styled.header`
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: block;
  position: relative;
  z-index: 2;
`;

const MainContainer = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  transition: color 0.3s ease, opacity 0.3s ease 0.65s;
  z-index: 7;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ContentItem = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
`;

const Heading = styled.h1`
  display: inline-block;
  font-family: 'Reenie Beanie', cursive;
  font-size: 7rem;
  line-height: 1;
`;

const SubHeading = styled.h3`
  font-style: italic;
  font-weight: 400;
`;

const LogoContainer = styled.section`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-style: preserve-3d;
  left: 37%;
  opacity: 0.6;
  z-index: 3;
`;

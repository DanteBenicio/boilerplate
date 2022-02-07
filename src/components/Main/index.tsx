import Image from 'next/image';
import React from 'react';
import LogoSvg from '../../../public/hero-illustration.svg';
import {
  Container, Wrapper, Logo, Subtitle, ImageWrapper,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <Logo src="./logo.svg" />
        <Subtitle>
          <h2>React Avançado - Boilerplate</h2>
          <p>Typescript, React, NextJS e Styled Components</p>
        </Subtitle>
        <ImageWrapper>
          <Image src="/hero-illustration.svg" width="300px" height="300px" objectFit="contain" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

import styled from 'styled-components';

const color = '#06092b';

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: ${color};
  padding: 1.6rem 2.4rem;
`;

export const Wrapper = styled.main`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

export const Logo = styled.img`
  object-fit: contain;
`;

export const Subtitle = styled.div`
  width: 100%;

  h2 {
    font-size: 2.8rem;
    text-align: center;
  }

  p {
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
  text-align: center;
`;

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    // max-width: 1000px;
    // background-color: black;
    background-image: url(images/misc/movie-details-bg.jpg);
    background-size:cover;
    background-attachment: fixed;
    flex-direction: column;
    @media (max-width: 1000px) {
    padding: 70px 30px;
    }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    background-size:cover;
    background-attachment: fixed;
  }

  @media (max-width: 667px) {
    background-size:cover;
    background-attachment: fixed;
  }
  @media (max-width: 375px) {
    background-size:cover;
    background-attachment: fixed;
  }
`;
export const Link = styled.a`
  color: #ffff;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #b7c023;
  margin-bottom: 40px;
  border-bottom: 2px solid #b7c023;
`;

export const Text = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  margin-top: 40px
`;
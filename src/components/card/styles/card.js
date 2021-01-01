import styled from 'styled-components/macro';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    > ${Title} {
    @media (max-width: 1000px) {
        margin-left: 30px;
    }
    }
    &:last-of-type {
    margin-bottom: 0;
    }
`



export const SubTitle = styled.p`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`

export const Group = styled.div`
   display: flex;
    flex-direction: ${({flexDirection}) => (flexDirection === 'row' ? 'row' : ' column')};
    ${({alignItems}) => (alignItems && `align-items: ${alignItems}`)};
    ${({margin}) => (margin && `margin: ${margin}`)};

    >${Container}: first-of-type{
        @media (min-width: 1100px){
            margin-top: -50px;
            position: relative;
        }
    }
    position: relative;
`

export const Text = styled.p`
    margin-top: 5px;
    font-size: 12px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`

export const FeatureText = styled.p`
    font-size: 18px;
    font-weight: ${({fontWeight}) =>(fontWeight === 'bold' ? 'bold':'normal')};
    color: #fff;
`

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({src}) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media(max-width: 1000px){
        height: auto;
        background-size: auto;

        ${Title}{
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;

        }
    }
`

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`



export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;
    

    @media(max-width : 1000px){
        margin: 30px;
        max-width: none;
    }
`


export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#00c6ff')};
    border-radius: 15px;
    width: 28px;
    line-height: 28px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #00000008f;
`

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    border: 2px solid black;
    transition: transform 0.3s;
    margin-bottom: 0;
    &:hover {
        transform: scale(1.1);
        border: 2px solid #fff;
        z-index: 99;
      }

      @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
          display: block;
          z-index: 100;
        }
      }

      &:first-of-type {
        margin-left: 56px;
        @media (max-width: 1000px) {
          margin-left: 30px;
        }
      }
      &:last-of-type {
        margin-right: 56px;
        @media (max-width: 1000px) {
          margin-right: 28px;
        }
      }
`

export const Image = styled.img`
    cursor: pointer;
    border: 0;
    width: 100%;
    max-width: 305px;
    height: auto;
    padding: 0;
    margin: 0;
`
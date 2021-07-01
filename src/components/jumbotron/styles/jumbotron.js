import styled from 'styled-components/macro'

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
    z-index:999;
`;

export const Inner = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;

export const Container = styled.div`
 @media (max-width: 1000px){
    ${Item}: last-of-type h2{
        margin-bottom: 50px;
    }
}
`;

export const Pane = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 1000px){
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    @media (max-width: 600px){
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    position: relative;
`;

export const Slide = styled.div `
    position: absolute;
    background: #000;
    left: -6%;
    bottom: 5%;
    border: 2px solid rgba(255,255,255,.25);
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 364px;
    max-width: 364px;
    height: 100px;
    margin: 0 auto;
    justify-content: center;
   
 
    @media (max-width: 1180px){
       height: 80px;
       min-width: 360px;
       left: -7%;
    }
    @media (max-width: 1000px){
        height: 80px;
        left: 30%;
        max-width: 362px;
     }
     @media (max-width: 850px){
        left: 28%;
        width: 322px;
        max-width: 322px;
     }
     @media (max-width: 750px){
        left: 26%;
        width: 322px;
        max-width: 322px;
     }
     @media (max-width: 660px){
        left: 24%;
        width: 322px;
        max-width: 322px;
     }
     @media (max-width: 630px){
        left: 22%;
        width: 322px;
        max-width: 322px;
     }
     @media (max-width: 550px){
        left: 18%;
        width: 322px;
        max-width: 322px;
     }
     @media (max-width: 480px){
        left: 14%;
        width: 280px;
        max-width: 280px;
     },
     @media (max-width: 430px){
        left: 4%;
        width: 280px;
        max-width: 280px;
     }
    
     @media (max-width: 400px){
        left: 6%;
     }
     @media (max-width: 375px){
        left: 5%;
     }
     @media (max-width: 360px){
       display: none;
      
     }
    
    
`
export const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    margin-left: 10px;
    text-align: center;
    height: 100%;
    
`

export const SlideImg = styled.div`
    background: url(${({src}) => src});
    height: 4.5em;
    width: 50px;
    object-fit: contain;
    background-size: cover;
    margin-left: 10px;
  
`
export const SlideContent = styled.div`
    font-weight: 600; 
    min-width: 120px;
`
export const SlideSubContent = styled.div`
    color: #0071eb;
    font-size: 16px;
    min-width: 120px;
`

export const SlideGifContent = styled.div`
    background: url(${({srcGif}) => srcGif});
    height: 60px;
    width: 60px;
    background-size: cover;
    margin-right: 10px;
   
`

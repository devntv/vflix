import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
 
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
    width: 56%;
    z-index: 1;
    max-width: 450px;
    border: 0;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
    border-top-left-radius: 4px;

    @media (max-width: 1000px){     
        border-radius: 3px;
    }
    @media (max-width: 500px){
        font-size: 11.5px;
        height: 50px;
        width:200px;
        text-align:center;
    }

`

export const Button = styled.button`
    // width: 44%;
    display: flex;
    z-index: 1;
    align-items: center;
    //height: 100%;
    height: 70px;
    box-sizing: border-box;
    color: #fff;
    background: #dc0510;
    // text-transform: uppercase;
    padding: 0 32px;
    font-size: 20px;
    //font-weight: bold;
    border: 0;
    cursor: pointer;
    border-top-right-radius: 4px;
    
    &:disabled {
        opacity: ${({disabled}) =>(disabled === true ? 0.6 : 0)}      
    }

    &:hover{
        background: #f40612;
        transition: all .3s ease-in;
    }
    @media (max-width: 1000px){
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        border-radius: 3px;
        font-weight: bold;
    }
    @media (max-width: 500px){
        font-size: 11.5px;
        height: 50px;
        width:200px;
        text-align:center;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 18px;

        @media (max-width: 1000px){
            width: 16px;
        }
      
        
    }

  
`

export const Text = styled.p`
    font-size: 20px;
    color: #fff;
    text-align: center;
    z-index: 1;
    margin-top: 10px;
    @media (max-width: 705px){
        font-size: 16px;
        line-height: 22px;

    }
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`
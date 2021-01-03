import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/homebg-vn.jpg')}) 
    top left/cover no-repeat;
    background-size: cover;
    border-bottom: 12px solid #222;
    @media(max-width: 1100px){
        ${({responsive}) => responsive &&  `background: none;`}
    }

    &::after{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 130%;
        background: rgba(0, 0, 0, 0.7);
    } 
    @media (max-width: 1000px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 145%;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 914px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 144%;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 705px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 862px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 686px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 863px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 654px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 920px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 605px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 805px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 528px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 830px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 500px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 805px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 481px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 845px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 468px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 845px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 415px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 868px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 391px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 908px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 358px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 930px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 325px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 970px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 315px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 990px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 393px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 990px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 392px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 910px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 359px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 930px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 325px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 970px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 315px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 990px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 306px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 1010px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
    @media (max-width: 285px ){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100vw;
            height: 1050px;
            background: rgba(0, 0, 0, 0.6);
        }
    }
   
`

export const Frame = styled.div`

`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0 ;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    a {
        display: flex;
    }

    @media (max-width: 1000px){
        margin: 0 30px;
    }
`

export const Picture = styled.button`
    background: url(${({src}) => src});
    background-size: contain;
    border: 1px solid red;
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }
     
    @media (max-width: 700px){
        display: none;
    }
`
export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border:0;
    
    img{
        filter: brightness(0) invert(1);
        width: 20px;
      
    }
`
export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  max-width: 160px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 1px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display:flex;
  justify-content: center;

    &:hover{
        background-color: #ff1e1e;
        color: white;
    }
`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid #cac2c2;
    border-radius: 2px;
    margin-right: 10px;
    transition: all 0.3s;
    height: 28px;
    font-size: 14px;
    margin-left: ${({active}) => (active === true ? '10px': '0') };
    padding: ${({active}) => (active === true ? '0 10px': '0') };
    opacity: ${({active}) => (active === true ? '1': '0') };
    width: ${({active}) => (active === true ? '200px': '0') };
`

export const Link = styled.p`
    color: ${({active}) => (active=== 'true'? '#ff915c' :'#fff')};
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({active}) =>(active === 'true' ? '700': 'normal')};
    cursor: pointer;
    border-bottom: ${({active}) => (active === 'true' ? '2px solid red': 'none')};
    transition: all .4s linear;
    &:hover{
        
        color: #ff6c1a;
    }
    &:last-of-type{
        margin-right: 0;
    }
`

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 180px;
    top: 32px;
    right: -35px;

    ${Group}: last-of-type ${Link}{
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 16px;

        &:last-of-type{
            margin-bottom: 0;
        }

        ${Link}, ${Picture}{
            cursor: default;
        }
    }

    button{
        margin-right: 10px;
    }

    p{
        font-size: 14px;
        margin-bottom:0;
        margin-top: 0;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    marrgin-left: 20px;
    position: relative;

    button{
        cursor: pointer;
       
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`

export const Logo = styled.img`
    height: 42px;
    width: 120px;
    margin-right: 40px;
    z-index: 1;

    @media (min-width: 1449px){
        height: 45px;
        width: 168px;
    }

`

export const ButtonLink= styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    // width: 84px;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover{
        background-color: #f40612;
        transition: all .3s ease-in'
    }x
`

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    @media (max-width: 1100px){
        display: none;
    }
`
export const Text = styled.p`
    color: #fff;
    font-size: 20px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0 ,0 ,0 ,0.45);
    margin-top: -40px;
`


export const ChildHeader = styled(Background)`
  
    &::after{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        background: rgba(0, 0, 0, 0);
    } 
`

export const FeatureCallOut = styled.h3`
    color: #fff;
    font-size: 45px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0 ,0 ,0 ,0.45);
    margin-top: 110px;

`


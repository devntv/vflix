import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/homebg-vn.jpg')}) 
    top left/cover no-repeat;
    background-size: cover;
    object-fit: cover;
    border-bottom: 12px solid #222;
    height: 100%;
    position: relative;

    &::after{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: rgba(0, 0, 0, 0.8);
        background: rgba(0,0,0,.4);
        // background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.8)),color-stop(60%,rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
        background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    } 
   
    @media(max-width: 1100px){
        ${({responsive}) => responsive &&  `background: none;`}
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
    height: 50px;
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
    z-index: 999;
    position: relative;

    @media (min-width: 1449px){
        height: 55px;
        width: 175px;
        z-index: 999;
        position: relative;
    }

`

export const ButtonLink= styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 20px;
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


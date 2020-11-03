import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/homebg-vn.jpg')}) 
    top left/cover no-repeat;
    background-size: cover;
    border-bottom: 8px solid #222;
    &::after{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 789px;
        background: rgba(0, 0, 0, 0.7);
    } 
    @media (max-width: 1000px){
        &::after{
            content:'';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 860px;
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
            height: 883px;
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
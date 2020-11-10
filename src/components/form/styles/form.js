import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
     min-height: 400px;
     background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
    height: 100%;

    @media (max-width: 1000px){
        margin-bottom: 171px;
    }
    @media (max-width: 915px){
        margin-bottom: 194px;
    }
    @media (max-width: 705px){
         margin-bottom: 83px;
         margin-top: 90px;
    }
    @media (max-width: 654px){
        margin-bottom: 141px;
        margin-top: 90px;
    }
    @media (max-width: 604px){
        margin-bottom: 26px;
        margin-top: 90px;
    }
    @media (max-width: 528px){
        margin-bottom: 86px;
        margin-top: 55px;
    }
    @media (max-width: 500px){
        margin-bottom: 61px;
        margin-top: 55px;
    }
    @media (max-width: 481px){
        margin-bottom: 101px;
      
    }
    @media (max-width: 436px){
        margin-bottom: 83px;
      
    }
    @media (max-width: 415px){
        margin-bottom: 106px;
      
    }
    @media (max-width: 390px){
        margin-bottom: 130px;
      
    }
    @media (max-width: 359px){
        margin-bottom: 150px;
      
    }
    @media (max-width: 336px){
        margin-bottom: 132px;
      
    }
    @media (max-width: 325px){
        margin-bottom: 172px;
      
    }
    @media (max-width: 315px){
        margin-bottom: 156px;
      
    }
    @media (max-width: 285px){
        margin-bottom: 180px;
      
    }
    
`

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;

`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`
export const TextSmall = styled.p`
`

export const Link = styled(ReachRouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    &:last-of-type {
    margin-bottom: 30px;
    }
`

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
    }
`
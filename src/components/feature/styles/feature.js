import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 120px 30px;
`
export const Title = styled.h1`
    color: #fff;
    z-index: 1;
    max-width: 800px;
    font-size: 64px;
    font-weight: 600;
    margin: auto;
    text-align: center;

    @media (max-width: 605px){
        font-size: 35px;
    }
    @media (max-width: 1000px){
        max-width: 540px;
        font-size: 42px;
    }
`
export const SubTitle = styled.h2`
    color: #fff;
    z-index: 1;
    max-width: 640px;
    font-size: 26px;
    font-weight: normal;
    margin: 10px auto;

    @media (max-width: 605px){
        font-size: 18px;
    }
   
`
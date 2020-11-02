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
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 605px){
        font-size: 35px;
    }
`
export const SubTitle = styled.h2`
    color: #fff;
    z-index: 1;
    max-width: 640px;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 605px){
        font-size: 18px;
    }
`
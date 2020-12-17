import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction : column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 70%;
`
export const Title = styled.h1`
    font-size:40px;
    color: white;
    width: 100%
    text-align: center;
    font-weight: 550;

`
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    // list-style: none;

`
export const Name = styled.p`
    font-size: 16px
    color: #808080;
    text-overflow: ellipsis;
    font-weight: bold;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`
export const Picture = styled.img`
    width: 100%;
    max-width: 170px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;

`
export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    text-align: center;
    margin-right: 30px;
    list-style: none;
    

    &:hover > ${Picture}{
        border: 3px solid #fff;
    }
    &:hover ${Name}{
        font-weight: bold;
        color: #fff
    }

    &:last-of-type{
        margin-right: 0;
    }
`
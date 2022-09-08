import styled from "styled-components";

export const Container = styled.div`
padding: 3rem 0;
 span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%
 }
`
export const img = styled.img`
    width: 300px;
    border-radius: 1rem;
`

export const Movie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-left: 2rem;
    }
`

export const MovieTitle = styled.h1`
margin: 3rem 0;

`


export const Sinopse = styled.span``

export const ReleaseDate = styled.span`
opacity: 0.9;
`

export const Button = styled.button`
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: rem;
    font-size: 100%;
    transition: all 0.3s;

    &:hover {
        background-color: #5848c2;
    }
`


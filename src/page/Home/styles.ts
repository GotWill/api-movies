import styled from "styled-components"

export const Container = styled.div`
    padding-bottom: 4rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 4rem 0px;
`

export const UlList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding: 0px 2rem;
`

export const LiMovies = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const img = styled.img`
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1)
    }
`
export const TitleMovie = styled.span`
    font-weight: bold;
    font-size: 120%;
    text-align: center;
`
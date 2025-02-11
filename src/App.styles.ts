import styled from "styled-components";

interface ContainerProps {
    imgUrl: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.9), 
        rgba(0, 0, 0, 0.5)
    ), url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const PredictionCard = styled.div`
    width: 36rem;

    @media (max-width: 520px) {
        width: 100%;
    }
`